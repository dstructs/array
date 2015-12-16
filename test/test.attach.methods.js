/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var attach = require( './../lib/attach.methods.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'attach methods', function tests() {

	it( 'should export a function', function test() {
		expect( attach ).to.be.a( 'function' );
	});

	it( 'should attach methods to an array', function test() {
		var arr;

		// Generic array:
		arr = [1,2,3,4,5];

		attach( arr, 'generic' );

		assert.isFunction( arr.toString );
		assert.isFunction( arr.toJSON );

		// Typed array:
		arr = new Int8Array( [1,2,3,4,5] );

		attach( arr, 'int8' );

		assert.isFunction( arr.toString );
		assert.isFunction( arr.toJSON );
	});

	it( 'should attach raw methods to an array', function test() {
		var arr;

		// Generic array:
		arr = [1,2,3,4,5];

		attach( arr, 'generic', {'raw':true} );

		assert.isFunction( arr.toString );
		assert.isFunction( arr.toJSON );

		// Typed array:
		arr = new Int8Array( [1,2,3,4,5] );

		attach( arr, 'int8', {'raw':true} );

		assert.isFunction( arr.toString );
		assert.isFunction( arr.toJSON );
	});

});
