/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib/array.raw.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'array (raw)', function tests() {

	it( 'should export a function', function test() {
		expect( array ).to.be.a( 'function' );
	});

	it( 'should return a new array instance if provided a length', function test() {
		var expected;
		var arr;
		var i;

		arr = array( 1 );
		assert.isTrue( arr instanceof Float64Array );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 8 );

		expected = new Float64Array( 1 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}

		arr = array( 1, 'int8' );
		assert.isTrue( arr instanceof Int8Array );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 1 );

		expected = new Int8Array( 1 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}
	});

	it( 'should cast an input array to a specified type', function test() {
		var expected;
		var arr;
		var i;

		arr = array( new Int8Array( 10 ), 'uint16' );
		assert.isTrue( arr instanceof Uint16Array );

		assert.strictEqual( arr.BYTES_PER_ELEMENT, 2 );
		expected = new Uint16Array( 10 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}

		arr = array( new Float32Array( 10 ), 'uint8_clamped' );
		assert.isTrue( arr instanceof Uint8ClampedArray );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 1 );

		expected = new Uint8ClampedArray( 10 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}

		arr = array( new Uint32Array( [1,2,3,4] ), 'float32' );
		assert.isTrue( arr instanceof Float32Array );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 4 );

		expected = new Uint32Array( [1,2,3,4] );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}
	});

	it( 'should cast a plain array to a float64', function test() {
		var out;
		var arr;
		var i;

		arr = new Array(1,2,3,4,5,6);
		out = array( arr );

		assert.isTrue( out instanceof Float64Array );
		assert.strictEqual( out.BYTES_PER_ELEMENT, 8 );
		assert.strictEqual( out.length, arr.length );

		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], out[ i ] );
		}
	});

});
