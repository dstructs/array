'use strict';

// MODULES //

var dtype = require( 'dstructs-array-dtype' );
var typeName = require( 'type-name' );
var props = require( './props.js' );
var rawProps = require( './props.raw.js' );


// ATTACH //

/**
* FUNCTION: attach( ctx[, opts] )
*	Attached properties to an object.
*
* @param {Object} ctx - object
* @param {Object} [opts] - function options
* @param {Boolean} [opts.raw=false] - boolean indicating whether to attach "raw" properties
* @param {Object} context
*/
function attach( ctx, opts ) {
	var dt = dtype( typeName( ctx ) );
	dt = dt || 'generic';
	if ( opts && opts.raw ) {
		return rawProps( ctx, dt );
	}
	return props( ctx, dt );
} // end FUNCTION attach()


// EXPORTS //

module.exports = attach;
