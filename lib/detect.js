'use strict';

/**
* FUNCTION: test()
*	Tests for native `class` support.
*
* @returns {Boolean} boolean indicating if an environment has native `class` support
*/
function test() {
	/* jshint evil:true */
	var bool;
	try {
		eval( '"use strict"; class A{};' );
		bool = true;
	} catch ( err ) {
		bool = false;
	}
	return bool;
} // end FUNCTION test()


// EXPORTS //

module.exports = test;
