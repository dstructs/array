'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );
var isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );
var isArrayLike = require( 'validate.io-array-like' );
var cast = require( 'dstructs-cast-arrays' );
var ctors = require( 'dstructs-array-constructors' );
var props = require( './attach.props.js' );
var methods = require( './attach.methods.js' );


// FUNCTIONS //

var CTOR = ctors( 'float64' );


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
	if ( arguments.length === 1 ) {
		dt = 'float64';
	} else {
		dt = dtype;
	}
	if ( !( this instanceof DataArray ) ) {
		return new DataArray( x, dt );
	}
	if ( isNumber( x ) ) {
		if ( !isNonNegativeInteger( x ) ) {
			throw new TypeError( 'invalid input argument. Array length must be a nonnegative integer. Value: `' + x + '`.' );
		}
		if ( dt === 'float64' ) {
			arr = new CTOR( x );
		} else {
			ctor = ctors( dt );
			if ( ctor === null ) {
				throw new Error( 'invalid input argument. Unrecognized/unsupported data type. Value: `' + dt + '`.' );
			}
			// FIXME: if dtype is `generic` and `len` > 64K, treated as sparse

			arr = new ctor( x );
		}
	}
	else if ( isArrayLike( x ) ) {
		arr = cast( x, dt );
	}
	else {
		throw new TypeError( 'invalid input argument. Input data must be either a typed or generic array. Value: `' + x + '`.' );
	}
	// Attach properties and methods:
	props( arr, dt );
	methods( arr );

	return arr;
} // end FUNCTION DataArray()


// EXPORTS //

module.exports = DataArray;
