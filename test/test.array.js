/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	array = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'array', function tests() {

	it( 'should export a function', function test() {
		expect( array ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided an array or output array length', function test() {
		var values = [
			// '5', // array-like
			null,
			undefined,
			true,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				array( value );
			};
		}
	});

	it( 'should throw an error if provided an output array length which is not a nonnegative integer', function test() {
		var values = [
			-5,
			Math.PI,
			NaN
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				array( value );
			};
		}
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type', function test() {
		var values = [
			'5',
			'double',
			'single',
			'int64',
			'int128',
			'doubledouble',
			'boolean',
			'binary',
			'string',
			'number',
			5,
			NaN,
			null,
			undefined,
			true,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				array( 10, value );
			};
		}
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type', function test() {
		var values = [
			'5',
			'double',
			'single',
			'int64',
			'int128',
			'doubledouble',
			'boolean',
			'binary',
			'string',
			'number',
			5,
			NaN,
			true,
			null,
			undefined,
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[ i ] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				array( [1,2,3], value );
			};
		}
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
		var expected,
			arr,
			i;

		arr = array( new Int8Array( 10 ), 'uint16' );
		assert.strictEqual( arr.constructor.name, 'Uint16Array' );

		assert.strictEqual( arr.BYTES_PER_ELEMENT, 2 );
		expected = new Uint16Array( 10 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}

		arr = array( new Float32Array( 10 ), 'uint8_clamped' );
		assert.strictEqual( arr.constructor.name, 'Uint8ClampedArray' );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 1 );

		expected = new Uint8ClampedArray( 10 );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}

		arr = array( new Uint32Array( [1,2,3,4] ), 'float32' );
		assert.strictEqual( arr.constructor.name, 'Float32Array' );
		assert.strictEqual( arr.BYTES_PER_ELEMENT, 4 );

		expected = new Uint32Array( [1,2,3,4] );
		for ( i = 0; i < arr.length; i++ ) {
			assert.strictEqual( arr[ i ], expected[ i ] );
		}
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
