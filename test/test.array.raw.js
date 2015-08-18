/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	array = require( './../lib/array.raw.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array (raw)', function tests() {

	it( 'should export a function', function test() {
		expect( array ).to.be.a( 'function' );
	});

	it( 'should return a new array instance if provided a length', function test() {
		var arr;

		arr = array( 1 );
		assert.strictEqual( arr.constructor.name, 'Float64Array' );
		assert.deepEqual( arr, new Float64Array( 1 ) );

		arr = array( 1, 'int8' );
		assert.strictEqual( arr.constructor.name, 'Int8Array' );
		assert.deepEqual( arr, new Int8Array( 1 ) );
	});

	it( 'should cast an input array to a specified type', function test() {
		var arr;

		arr = array( new Int8Array( 10 ), 'uint16' );
		assert.strictEqual( arr.constructor.name, 'Uint16Array' );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 2 );
		assert.deepEqual( arr, new Uint16Array( 10 ) );

		arr = array( new Float32Array( 10 ), 'uint8_clamped' );
		assert.strictEqual( arr.constructor.name, 'Uint8ClampedArray' );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 1 );
		assert.deepEqual( arr, new Uint8ClampedArray( 10 ) );

		arr = array( new Uint32Array( [1,2,3,4] ), 'float32' );
		assert.strictEqual( arr.constructor.name, 'Float32Array' );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 4 );
		assert.deepEqual( arr, new Uint32Array( [1,2,3,4] ) );
	});

	it( 'should cast a plain array to a float64', function test() {
		var out, arr;

		arr = new Array(1,2,3,4,5,6);
		out = array( arr );

		assert.strictEqual( out.constructor.name, 'Float64Array' );
		assert.strictEqual( out.BYTES_PER_ELEMENT, 8 );
		assert.strictEqual( out.length, arr.length );

		for ( var i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], out[ i ] );
		}
	});

});
