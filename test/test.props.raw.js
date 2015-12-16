/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var props = require( './../lib/props.raw.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'properties (raw)', function tests() {

	it( 'should export a function', function test() {
		expect( props ).to.be.a( 'function' );
	});

	it( 'should attach a dtype property', function test() {
		var arr = new Array( 10 );
		props( arr, 'generic' );
		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isString( arr.dtype );
		assert.strictEqual( arr.dtype, 'generic' );
	});

	it( 'should attach a shape property', function test() {
		var arr = new Int8Array( 10 );
		props( arr, 'int8' );
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isArray( arr.shape );
		assert.deepEqual( arr.shape, [10,1] );
	});

	it( 'should attach a strides property', function test() {
		var arr = [1,2,3,4,5];
		props( arr, 'generic' );
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isArray( arr.strides );
		assert.deepEqual( arr.strides, [1,1] );
	});

	it( 'should attach an offset property', function test() {
		var arr = new Float32Array( [1,2,3] );
		props( arr, 'float32' );
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isNumber( arr.offset );
		assert.strictEqual( arr.offset, 0 );
	});

	it( 'should attach a ndims property', function test() {
		var arr = new Array(1,2,3,4,5);
		props( arr, 'generic' );
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isNumber( arr.ndims );
		assert.strictEqual( arr.ndims, 1 );
	});

	it( 'should attach a nbytes property', function test() {
		var arr;

		// Typed array:
		arr = new Uint8Array( [1,2,3] );
		props( arr, 'uint8' );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );
		assert.isNumber( arr.nbytes );
		assert.strictEqual( arr.nbytes, 3 );

		// Generic array:
		arr = [1,2,3];
		props( arr, 'generic' );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );
		assert.isNull( arr.nbytes );
	});

});