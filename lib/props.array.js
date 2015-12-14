'use strict';

/**
* FUNCTION: props( ctx )
*	Adds properties to an array context.
*
* @param {Array} - array
* @returns {Void}
*/
function props( ctx ) {
	// Underlying data type:
	Object.defineProperty( ctx, 'dtype', {
		'value': 'generic',
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
		'value': null,
		'configurable': false,
		'enumerable': true,
		'writable': false
	});
} // end FUNCTION props()


// EXPORTS //

module.exports = props;
