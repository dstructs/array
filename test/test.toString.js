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
		var data;
		var arr;
		var i;

		// Zero-filled array:
		arr = array( 10, 'int8' );

		actual = arr.toString();
		expected = '0,0,0,0,0,0,0,0,0,0';

		assert.strictEqual( actual, expected );

		// Full array:
		data = new Array( 6 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i * 2;
		}

		arr = array( data, 'float32' );

		actual = arr.toString();
		expected = '0,2,4,6,8,10';

		assert.strictEqual( actual, expected );
	});

	it( 'should convert a raw array to a string', function test() {
		var expected;
		var actual;
		var data;
		var arr;
		var i;

		// Zero-filled array:
		arr = array.raw( 10, 'int8' );

		actual = arr.toString();
		expected = '0,0,0,0,0,0,0,0,0,0';

		assert.strictEqual( actual, expected );

		// Full array:
		data = new Array( 6 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i * 2;
		}

		arr = array.raw( data, 'float32' );

		actual = arr.toString();
		expected = '0,2,4,6,8,10';

		assert.strictEqual( actual, expected );
	});

});
