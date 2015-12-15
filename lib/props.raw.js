'use strict';

/**
* FUNCTION: props( ctx, dtype )
*	Adds properties to an array or typed array context.
*
* @param {Array|Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array} ctx - array or typed array
* @param {String} dtype - underlying data type
* @returns {Array|Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array} context
*/
function props( ctx, dtype ) {
	ctx.dtype = dtype;
	ctx.shape = [ ctx.length, 1 ];
	ctx.strides = [ 1, 1 ];
	ctx.offset = 0;
	ctx.ndims = 1;
	ctx.nbytes = ctx.byteLength || null;
	return ctx;
} // end FUNCTION props()


// EXPORTS //

module.exports = props;
