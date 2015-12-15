'use strict';

/**
* FUNCTION: props( ctx )
*	Adds properties to an array context.
*
* @param {Array} ctx - array
* @returns {Array} context
*/
function props( ctx ) {
	ctx.dtype = 'generic';
	ctx.shape = [ ctx.length, 1 ];
	ctx.strides = [ 1, 1 ];
	ctx.offset = 0;
	ctx.ndims = 1;
	ctx.nbytes = null;
	return ctx;
} // end FUNCTION props()


// EXPORTS //

module.exports = props;
