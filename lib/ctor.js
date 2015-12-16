'use strict';

// MODULES //

var CTORS = require( './ctors.js' );


// VARIABLES //

var KEYS = Object.keys( CTORS );
var LEN = KEYS.length;


// GET CTOR //

/**
* FUNCTION: getCtor( ctx )
*	Returns a constructor name.
*
* @param {Array|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} ctx - context
* @returns {String|Null} constructor name or null
*/
function getCtor( ctx ) {
	var i;
	for ( i = 0; i < LEN; i++ ) {
		if ( ctx instanceof CTORS[ KEYS[i] ] ) {
			return KEYS[ i ];
		}
	}
	return null;
} // end FUNCTION getCtor()


// EXPORTS //

module.exports = getCtor;
