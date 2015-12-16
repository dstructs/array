/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib' );
var getCtor = require( './../lib/ctor.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'get constructor name', function tests() {

	it( 'should export a function', function test() {
		expect( getCtor ).to.be.a( 'function' );
	});

	it( 'should return `null` if unable to determine constructor name (e.g., due to lack of support)', function test() {
		var values;
		var i;

		values = [
			'5',
			5,
			NaN,
			true,
			null,
			undefined,
			{},
			function(){}
		];

		for ( i = 0; i < values.length; i++ ) {
			assert.isNull( getCtor( values[i] ) );
		}
	});

	it( 'should return a constructor name', function test() {
		var expected;
		var actual;
		var values;
		var i;

		values = [
			array( 10, 'int8' ),
			array( 10, 'uint8' ),
			array( 10, 'uint8_clamped' ),
			array( 10, 'int16' ),
			array( 10, 'uint16' ),
			array( 10, 'int32' ),
			array( 10, 'uint32' ),
			array( 10, 'float32' ),
			array( 10, 'float64' ),
			array( 10, 'generic' )
		];

		expected = [
			'Int8Array',
			'Uint8Array',
			'Uint8ClampedArray',
			'Int16Array',
			'Uint16Array',
			'Int32Array',
			'Uint32Array',
			'Float32Array',
			'Float64Array',
			'Array'
		];

		for ( i = 0; i < values.length; i++ ) {
			actual = getCtor( values[ i ] );
			assert.strictEqual( actual, expected[ i ], expected[ i ] );
		}
	});

});
