'use strict';

// MODULES //

var hasClassSupport = require( 'detect-class-support' )();


// EXPORTS //

if ( hasClassSupport ) {
	module.exports = require( './array.js' );
	module.exports.raw = require( './array.raw.js' );
} else {
	module.exports = require( './polyfill.js' );
	module.exports.raw = require( './polyfill.raw.js' );
}
