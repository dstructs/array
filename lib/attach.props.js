'use strict';

// MODULES //

var props = require( './props.js' );
var rawProps = require( './props.raw.js' );


// ATTACH //

/**
* FUNCTION: attach( ctx, dtype[, opts] )
*	Attached properties to an object.
*
* @param {Object} ctx - object
* @param {String} dtype - underlying data type
* @param {Object} [opts] - function options
* @param {Boolean} [opts.raw=false] - boolean indicating whether to attach "raw" properties
* @param {Object} context
*/
function attach( ctx, dtype, opts ) {
	if ( opts && opts.raw ) {
		return rawProps( ctx, dtype );
	}
	return props( ctx, dtype );
} // end FUNCTION attach()


// EXPORTS //

module.exports = attach;
