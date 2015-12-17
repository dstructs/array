'use strict';

// MODULES //

var generate = require( './generate.js' );
var dtypes = require( './dtypes.js' );


// COMPILE //

/**
* FUNCTION: compile( [options] )
*	Generates class constructors.
*
* @param {Object} [options] - function options
* @param {Boolean} [options.raw=false] - boolean indicating whether to generate "raw" constructors
* @returns {Object} object containing constructors
*/
function compile( options ) {
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
} // end FUNCTION compile()


// EXPORTS //

module.exports = compile;