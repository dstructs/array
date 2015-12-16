'use strict';

// MODULES //

var dtype = require( 'dstructs-array-dtype' );
var props = require( './attach.props.js' );
var methods = require( './attach.methods.js' );


// GENERATE //

/**
* FUNCTION: generate( ctor[, opts] )
*	Creates a DataArray class.
*
* @param {String} ctor - constructor name
* @param {Object} [opts] - function options
* @param {Boolean} [opts.raw] - boolean indicating whether to create a "raw" DataArray class
* @returns {Function} DataArray class
*/
function generate( ctor, opts ) {
	/* jshint evil:true */
	var DataArray;
	var fcn;
	var raw;
	var dt;

	dt = dtype( ctor );
	if ( !dt ) {
		throw new Error( 'invalid input argument. Unrecognized/unsupported constructor name. Value: `' + ctor + '`.' );
	}
	if ( opts && opts.raw ) {
		raw = true;
	}
	fcn = '';

	// Create an IIFE wrapper:
	fcn += '(function create(){';

	// Create a `DataArray` class which extends the specified constructor:
	fcn += 'class DataArray extends ' + ctor + '{';

	// Define the class constructor:
	fcn += 'constructor(x){';

	// Be sure to first call the super class:
	fcn += 'super(x);';

	// Attach properties...
	fcn += 'props(this,\'' + dt + '\'';
	if ( raw ) {
		fcn += ',{\'raw\':true}';
	}
	fcn += ');';

	// Close the constructor:
	fcn += '}\n';

	// Handle case where super class is an `Array`...
	if ( ctor === 'Array' ) {
		// Define a setter/getter for shape, as the Array length may dynamically change:
		fcn += 'set shape(arr){';
		fcn += 'if(!Array.isArray(arr)||arr.length!==2||arr[0]!==this.length||arr[1]!==1){';
		fcn += 'throw new Error(\'invalid value. Shape must be a 2-element array. Value: \`\'+arr+\'\`.\');';
		fcn += '}';
		fcn += 'return arr;';
		fcn += '}\n';
		fcn += 'get shape(){';
		fcn += 'return [this.length,1];';
		fcn += '}';
	}
	// Close the class definition:
	fcn += '}';

	// Return the class definition:
	fcn += 'return DataArray;';

	// Close the IIFE:
	fcn += '})();';

	/* => e.g.,
		(function create() {
			class DataArray extends Array {
				constructor( x ) {
					super( x );
					props( this, 'generic', {'raw':true} );
				}
				get shape() {
					return [ this.length, 1 ];
				}
			}
			return DataArray;
		})();
	*/

	// Create a `DataArray` class (use `eval` to allow constructor to access `props` function):
	DataArray = eval( fcn );

	// Attach methods to the class prototype...
	if ( raw ) {
		methods( DataArray.prototype, {
			'raw': true
		});
	} else {
		methods( DataArray.prototype );
	}
	// Return the created class:
	return DataArray;
} // end FUNCTION generate()


// EXPORTS //

module.exports = generate;
