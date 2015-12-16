'use strict';

// MODULES //

var dtype = require( 'dstructs-array-dtype' );
var props = require( './attach.props.js' );
var methods = require( './attach.methods.js' );
var create = require( './create.js' );


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
	fcn = create( ctor, dt, raw );

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
