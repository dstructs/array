/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var ctors = require( './../lib/ctors.js' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'constructors', function tests() {

	it( 'should export an object', function test() {
		expect( ctors ).to.be.an( 'object' );
	});

});
