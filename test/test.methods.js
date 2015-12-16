/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var methods = require( './../lib/methods.js' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'methods', function tests() {

	it( 'should export an object', function test() {
		expect( methods ).to.be.an( 'object' );
	});

});
