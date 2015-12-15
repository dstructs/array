'use strict';

// CLASS CONSTRUCTORS //

var CTORS = {};

CTORS.Array = require( './array.raw.js' );
CTORS.Int8Array = require( './int8array.raw.js' );
CTORS.Uint8Array = require( './uint8array.raw.js' );
CTORS.Uint8ClampedArray = require( './uint8clampedarray.raw.js' );
CTORS.Int16Array = require( './int16array.raw.js' );
CTORS.Uint16Array = require( './uint16Array.raw.js' );
CTORS.Int32Array = require( './int32array.raw.js' );
CTORS.Uint32Array = require( './uint32array.raw.js' );
CTORS.Float32Array = require( './float32array.raw.js' );
CTORS.Float64Array = require( './float64array.raw.js' );


// EXPORTS //

module.exports = CTORS;

