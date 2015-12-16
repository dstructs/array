/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib/polyfill.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'array (polyfill)', function tests() {

	var arr = array( 10, 'uint32' );

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

	it( 'should return an array having setters' );

	it( 'should return an array having getters' );

	it( 'should create an array having a custom toString method', function test() {
		assert.isFunction( arr.toString );
	});

	it( 'should create an array having a custom toJSON method', function test() {
		assert.isFunction( arr.toJSON );
	});

	it( 'should create an array having a protected dtype property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isString( arr.dtype );

		expect( foo ).to.throw( Error );
		function foo() {
			arr.dtype = 'beep';
		}
	});

	it( 'should create an array having a protected shape property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isArray( arr.shape );

		expect( foo ).to.throw( Error );
		function foo() {
			arr.shape = [ 4, 5 ];
		}
	});

	it( 'should create an array having a protected strides property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isArray( arr.strides );
		assert.deepEqual( arr.strides, [1,1] );

		expect( foo ).to.throw( Error );
		function foo() {
			arr.strides = [ -4, 1 ];
		}
	});

	it( 'should create an array having an offset property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isNumber( arr.offset );
		assert.deepEqual( arr.offset, 0 );
	});

	it( 'should create an array having a protected ndims property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isNumber( arr.ndims );
		assert.strictEqual( arr.ndims, 1 );

		expect( foo ).to.throw( Error );
		function foo() {
			arr.ndims = NaN;
		}
	});

	it( 'should create an array having a protected nbytes property', function test() {
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );
		assert.isNumber( arr.nbytes );

		expect( foo ).to.throw( Error );
		function foo() {
			arr.nbytes = NaN;
		}
	});

});
