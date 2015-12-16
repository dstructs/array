/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib' );
var toString = require( './../lib/tostring.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'array#toString', function tests() {

	it( 'should export a function', function test() {
		expect( toString ).to.be.a( 'function' );
	});

	it( 'should convert an array to a string', function test() {
		var expected;
		var actual;
		var arr;

		// Generic array:
		arr = array( [1,2,3,4,5], 'generic' );

		actual = toString.call( arr );
		expected = '1,2,3,4,5';

		assert.strictEqual( actual, expected );

		// Typed array:
		arr = array( [0,2,4,6,8,10], 'float32' );

		actual = toString.call( arr );
		expected = '0,2,4,6,8,10';

		assert.strictEqual( actual, expected );
	});

	it( 'should convert a raw array to a string', function test() {
		var expected;
		var actual;
		var arr;

		// Generic array:
		arr = array.raw( [1,2,3,4,5], 'generic' );

		actual = toString.call( arr );
		expected = '1,2,3,4,5';

		assert.strictEqual( actual, expected );

		// Typed array:
		arr = array.raw( [0,2,4,6,8,10], 'float32' );

		actual = toString.call( arr );
		expected = '0,2,4,6,8,10';

		assert.strictEqual( actual, expected );
	});

});
