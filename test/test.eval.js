/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var evaluate = require( './../lib/eval.js' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'eval', function tests() {

	it( 'should export a function', function test() {
		expect( evaluate ).to.be.a( 'function' );
	});

});
