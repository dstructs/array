'use strict';

// MODULES //

var evaluate = require( './eval.js' );


// TEST //

/**
* FUNCTION: test()
*	Tests for native `class` support.
*
* @returns {Boolean} boolean indicating if an environment has native `class` support
*/
function test() {
	var bool;
	try {
		evaluate( '"use strict"; class A{};' );
		bool = true;
	} catch ( err ) {
		bool = false;
	}
	return bool;
} // end FUNCTION test()


// EXPORTS //

module.exports = test;
