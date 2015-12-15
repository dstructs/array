'use strict';

// MODULES //

var methods = require( './methods.js' );
var rawMethods = require( './methods.raw.js' );


// VARIABLES //

// Note: we assume that both `methods` objects have equivalent methods and thus matching keys...
var KEYS = Object.keys( methods );
var LEN = KEYS.length;


// ATTACH METHODS //

/**
* FUNCTION: attach( ctx[, opts] )
*	Attach methods to an object.
*
* @param {Object} ctx - object
* @param {Object} opts - function options
* @param {Boolean} [opts.raw=false] - boolean indicating whether to return "raw" methods
* @returns {Object} context
*/
function attach( ctx, opts ) {
	var m;
	var i;
	if ( opts && opts.raw ) {
		m = rawMethods;
	} else {
		m = methods;
	}
	for ( i = 0; i < LEN; i++ ) {
		ctx[ KEYS[i] ] = m[ KEYS[i] ];
	}
	return ctx;
} // end FUNCTION attach()


// EXPORTS //

module.exports = attach;
