'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' );
var isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );
var isArrayLike = require( 'validate.io-array-like' );
var cast = require( 'dstructs-cast-arrays' );
var ctors = require( 'dstructs-array-constructors' );


// FUNCTIONS //

var CTOR = ctors( 'float64' );


// ARRAY //

/**
* FUNCTION: array( x[, dtype] )
*	Returns an array instance.
*
* @param {Number|Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} x - input array or output array length
* @param {String} [dtype="float64"] - output array data type
* @returns {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} output array
*/
function array( x, dtype ) {
	/* jshint newcap:false */
	var ctor;
	var dt;
	if ( isNumber( x ) ) {
		if ( !isNonNegativeInteger( x ) ) {
			throw new TypeError( 'invalid input argument. Array length must be a nonnegative integer. Value: `' + x + '`.' );
		}
		if ( arguments.length === 1 ) {
			return new CTOR( x );
		}
		ctor = ctors( dtype );
		if ( ctor === null ) {
			throw new Error( 'invalid input argument. Unrecognized/unsupported data type. Value: `' + dtype + '`.' );
		}
		return new ctor( x );
	}
	if ( !isArrayLike( x ) ) {
		throw new TypeError( 'invalid input argument. Input data must be either a typed or generic array. Value: `' + x + '`.' );
	}
	if ( arguments.length > 1 ) {
		dt = dtype;
	} else {
		dt = 'float64';
	}
	return cast( x, dt );
} // end FUNCTION array()


// EXPORTS //

module.exports = array;
