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
	console.log( 'HERE!!' );
	try {
		class A {};
		a = new A();
		bool = true;
	} catch ( err ) {
		bool = false;
	}
	console.log( 'CLASS SUPPORT: %s', ( bool ) ? 'true': 'false' );
	return bool;
} // end FUNCTION test()


// EXPORTS //

module.exports = test;
