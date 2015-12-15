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
	// Underlying data type:
	Object.defineProperty( ctx, 'dtype', {
		'value': dtype,
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Array dimensions:
	Object.defineProperty( ctx, 'shape', {
		'value': [ ctx.length, 1 ],
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Array strides:
	Object.defineProperty( ctx, 'strides', {
		'value': [ 1, 1 ],
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Array offset:
	Object.defineProperty( ctx, 'offset', {
		'value': 0,
		'configurable': false,
		'enumerable': true,
		'writable': true
	});

	// Number of array dimensions:
	Object.defineProperty( ctx, 'ndims', {
		'value': 1,
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	// Number of bytes used by the array elements:
	Object.defineProperty( ctx, 'nbytes', {
		'value': ctx.byteLength || null,
		'configurable': false,
		'enumerable': true,
		'writable': false
	});

	return ctx;
} // end FUNCTION props()


// EXPORTS //

module.exports = props;
