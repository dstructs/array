'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );
var ctors = require( './ctors.js' )({'raw':true});


// DATA ARRAY //

/**
* FUNCTION: DataArray( x[, dtype] )
*	Creates an array.
*
* @param {Number|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - input array or output array length
* @param {String} [dtype="float64"] - output array data type
* @returns {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function DataArray( x, dtype ) {
	/* jshint newcap: false */
	var ctor;
	var arr;
	var dt;
	var i;
	if ( arguments.length === 1 ) {
		dt = 'float64';
	} else {
		dt = dtype;
	}
	if ( !( this instanceof DataArray ) ) {
		return new DataArray( x, dt );
	}
	ctor = ctors[ dt ];

	// FIXME: if dtype is `generic` and `len` > 64K, treated as sparse
	if ( isNumber( x ) ) {
		arr = new ctor( x );
	} else {
		arr = new ctor( x.length );
		for ( i = 0; i < x.length; i++ ) {
			arr[ i ] = x[ i ];
		}
	}
	return arr;
} // end FUNCTION DataArray()


// EXPORTS //

module.exports = DataArray;

