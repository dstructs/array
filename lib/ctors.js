'use strict';

// MODULES //

var generate = require( './generate.js' );


// VARIABLES //

var dtypes = {
	'int8': 'Int8Array',
	'uint8': 'Uint8Array',
	'uint8_clamped': 'Uint8ClampedArray',
	'int16': 'Int16Array',
	'uint16': 'Uint16Array',
	'int32': 'Int32Array',
	'uint32': 'Uint32Array',
	'float32': 'Float32Array',
	'float64': 'Float64Array',
	'generic': 'Array'
};


// CTORS //

/**
* FUNCTION: create( [options] )
*	Generates class constructors.
*
* @param {Object} [options] - function options
* @param {Boolean} [options.raw=false] - boolean indicating whether to generate "raw" constructors
* @returns {Object} object containing constructors
*/
function create( options ) {
	var keys = Object.keys( dtypes );
	var len = keys.length;
	var opts;
	var out;
	var i;
	if ( options && options.raw ) {
		opts = options;
	} else {
		opts = {
			'raw': false
		};
	}
	out = {};
	for ( i = 0; i < len; i++ ) {
		out[ keys[i] ] = generate( dtypes[ keys[i] ], opts );
	}
	return out;
} // end FUNCTION create()


// EXPORTS //

module.exports = create;
