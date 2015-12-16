/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var create = require( './../lib/create.js' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'create', function tests() {

	it( 'should export a function', function test() {
		expect( create ).to.be.a( 'function' );
	});

	it( 'should return a string', function test() {
		assert.isString( create( 'Array', 'generic', true ) );
	});

});
