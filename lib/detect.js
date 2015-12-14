'use strict';

/**
* FUNCTION: test()
*	Tests for native `class` support.
*
* @returns {Boolean} boolean indicating if an environment has native `class` support
*/
function test() {
	var bool;
	var a;

	// Test for native class support...
	try {
		class A {};
		a = new A();
		bool = true;
	} catch ( err ) {
		bool = false;
	}
	return bool;
} // end FUNCTION test()


// EXPORTS //

module.exports = test;
