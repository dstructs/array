'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	cast = require( 'dstructs-cast-arrays' ),
	ctors = require( 'dstructs-array-constructors' );


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
	if ( isNumber( x ) ) {
		if ( arguments.length === 1 ) {
			return new CTOR( x );
		}
		ctor = ctors( dtype );
		return new ctor( x );
	}
	return cast( x, dtype || 'float64' );
} // end FUNCTION array()


// EXPORTS //

module.exports = array;
