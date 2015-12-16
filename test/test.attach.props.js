/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var attach = require( './../lib/attach.props.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'attach properties', function tests() {

	it( 'should export a function', function test() {
		expect( attach ).to.be.a( 'function' );
	});

	it( 'should attach properties to an array', function test() {
		var arr;

		// Generic array:
		arr = [1,2,3,4,5];

		assert.isFalse( arr.hasOwnProperty( 'dtype' ) );
		assert.isFalse( arr.hasOwnProperty( 'shape' ) );
		assert.isFalse( arr.hasOwnProperty( 'offset' ) );
		assert.isFalse( arr.hasOwnProperty( 'strides' ) );
		assert.isFalse( arr.hasOwnProperty( 'ndims' ) );
		assert.isFalse( arr.hasOwnProperty( 'nbytes' ) );

		attach( arr, 'generic' );

		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );

		// Typed array:
		arr = new Int8Array( [1,2,3,4,5] );

		assert.isFalse( arr.hasOwnProperty( 'dtype' ) );
		assert.isFalse( arr.hasOwnProperty( 'shape' ) );
		assert.isFalse( arr.hasOwnProperty( 'offset' ) );
		assert.isFalse( arr.hasOwnProperty( 'strides' ) );
		assert.isFalse( arr.hasOwnProperty( 'ndims' ) );
		assert.isFalse( arr.hasOwnProperty( 'nbytes' ) );

		attach( arr, 'int8' );

		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );
	});

	it( 'should attach raw properties to an array', function test() {
		var arr;

		// Generic array:
		arr = [1,2,3,4,5];

		assert.isFalse( arr.hasOwnProperty( 'dtype' ) );
		assert.isFalse( arr.hasOwnProperty( 'shape' ) );
		assert.isFalse( arr.hasOwnProperty( 'offset' ) );
		assert.isFalse( arr.hasOwnProperty( 'strides' ) );
		assert.isFalse( arr.hasOwnProperty( 'ndims' ) );
		assert.isFalse( arr.hasOwnProperty( 'nbytes' ) );

		attach( arr, 'generic', {'raw':true} );

		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );

		// Typed array:
		arr = new Int8Array( [1,2,3,4,5] );

		assert.isFalse( arr.hasOwnProperty( 'dtype' ) );
		assert.isFalse( arr.hasOwnProperty( 'shape' ) );
		assert.isFalse( arr.hasOwnProperty( 'offset' ) );
		assert.isFalse( arr.hasOwnProperty( 'strides' ) );
		assert.isFalse( arr.hasOwnProperty( 'ndims' ) );
		assert.isFalse( arr.hasOwnProperty( 'nbytes' ) );

		attach( arr, 'int8', {'raw':true} );

		assert.isTrue( arr.hasOwnProperty( 'dtype' ) );
		assert.isTrue( arr.hasOwnProperty( 'shape' ) );
		assert.isTrue( arr.hasOwnProperty( 'offset' ) );
		assert.isTrue( arr.hasOwnProperty( 'strides' ) );
		assert.isTrue( arr.hasOwnProperty( 'ndims' ) );
		assert.isTrue( arr.hasOwnProperty( 'nbytes' ) );
	});

});
