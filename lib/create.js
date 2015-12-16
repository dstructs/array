'use strict';

/**
* FUNCTION: create( ctor, dtype, raw )
*	Creates a function string.
*
* @param {String} ctor - constructor name
* @param {String} dtype - underlying data type
* @param {Boolean} raw - boolean indicating whether to create a "raw" DataArray class
* @returns {String} function string
*/
function create( ctor, dtype, raw ) {
	var fcn = '';

	// Create an IIFE wrapper:
	fcn += '(function create(){';

	// Create a `DataArray` class which extends the specified constructor:
	fcn += 'class DataArray extends ' + ctor + '{';

	// Define the class constructor:
	fcn += 'constructor(x){';

	// Be sure to first call the super class:
	fcn += 'super(x);';

	// Attach properties...
	fcn += 'props(this,\'' + dtype + '\'';
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
		fcn += 'throw new Error(\'invalid value. Shape must be a 2-element array. Value: `\'+arr+\'`.\');';
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
				set shape(arr) {
					if (
						!Array.isArray( arr ) ||
						arr.length !== 2 ||
						arr[0] !== this.length ||
						arr[1] !== 1
					) {
						throw new Error( 'invalid input argument. Shape must be a 2-element array. Value: `'+arr+'`.' );
					}
					return arr;
				}
				get shape() {
					return [ this.length, 1 ];
				}
			}
			return DataArray;
		})();
	*/
	return fcn;
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
