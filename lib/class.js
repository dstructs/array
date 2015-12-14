'use strict';

// MODULES //

var nativeClass = require( './detect.js' )();


// EXPORTS //

if ( nativeClass ) {
	module.exports = require( './class/array.js' );
} else {
	module.exports = require( './proto/array.js' );
}
