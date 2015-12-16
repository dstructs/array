/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib' );
var toJSON = require( './../lib/tojson.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'array#toJSON', function tests() {

	it( 'should export a function', function test() {
		expect( toJSON ).to.be.a( 'function' );
	});

	it( 'should return an array in JSON representation', function test() {
		var expected;
		var actual;
		var data;
		var arr;
		var i;

		// Generic array:
		arr = array( [0,0,0,0,0,0,0,0,0,0], 'generic' );
		actual = toJSON.call( arr );
		expected = {
			'type': 'Array',
			'dtype': 'generic',
			'shape': [10,1],
			'offset': 0,
			'strides': [1,1],
			'raw': false,
			'data': [0,0,0,0,0,0,0,0,0,0]
		};

		assert.deepEqual( actual, expected );

		// Typed array:
		data = new Array( 6 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i * 2;
		}

		arr = array( data, 'float32' );

		actual = toJSON.call( arr );
		expected = {
			'type': 'Float32Array',
			'dtype': 'float32',
			'shape': [6,1],
			'offset': 0,
			'strides': [1,1],
			'raw': false,
			'data': [0,2,4,6,8,10]
		};

		assert.deepEqual( actual, expected );
	});

	it( 'should return a raw array in JSON presentation', function test() {
		var expected;
		var actual;
		var data;
		var arr;
		var i;

		// Zero-filled array:
		arr = array.raw( 10, 'int8' );

		actual = toJSON.call( arr );
		expected = {
			'type': 'Int8Array',
			'dtype': 'int8',
			'shape': [10,1],
			'offset': 0,
			'strides': [1,1],
			'raw': true,
			'data': [0,0,0,0,0,0,0,0,0,0]
		};

		assert.deepEqual( actual, expected );

		// Full array:
		data = new Array( 6 );
		for ( i = 0; i < data.length; i++ ) {
			data[ i ] = i * 2;
		}

		arr = array.raw( data, 'float32' );

		actual = toJSON.call( arr );
		expected = {
			'type': 'Float32Array',
			'dtype': 'float32',
			'shape': [6,1],
			'offset': 0,
			'strides': [1,1],
			'raw': true,
			'data': [0,2,4,6,8,10]
		};

		assert.deepEqual( actual, expected );
	});

	it( 'should deep copy properties to prevent accidental mutation', function test() {
		var json;
		var arr;

		arr = array( 10, 'int8' );
		json = toJSON.call( arr );

		assert.deepEqual( arr.dtype, json.dtype );
		assert.deepEqual( arr.shape, json. shape );
		assert.deepEqual( arr.offset, json.offset );
		assert.deepEqual( arr.strides, json.strides );

		assert.isTrue( arr.shape !== json.shape );
		assert.isTrue( arr.strides !== json.strides );
	});

});
