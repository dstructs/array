/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var array = require( './../lib' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'dstructs-array', function tests() {

	it( 'should export a function', function test() {
		expect( array ).to.be.a( 'function' );
	});

	it( 'should export a function which provides fewer guarantees when validating input arguments', function test() {
		expect( array.raw ).to.be.a( 'function' );
	});

});
