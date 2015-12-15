'use strict';

/**
* FUNCTION: props( ctx, dtype )
*	Adds properties to a typed array context.
*
* @param {Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array} ctx - typed array
* @param {String} dtype - underlying data type
* @returns {Uint8Array|Uint8ClampedArray|Int8Array|Uint16Array|Int16Array|Uint32Array|Int32Array|Float32Array|Float64Array} context
*/
function props( ctx, dtype ) {
	ctx.dtype = dtype;
	ctx.shape = [ ctx.length, 1 ];
	ctx.strides = [ 1, 1 ];
	ctx.offset = 0;
	ctx.ndims = 1;
	ctx.nbytes = ctx.byteLength;
	return ctx;
} // end FUNCTION props()


// EXPORTS //

module.exports = props;
