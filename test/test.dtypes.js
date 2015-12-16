/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var dtypes = require( './../lib/dtypes.js' );


// VARIABLES //

var expect = chai.expect;


// TESTS //

describe( 'dtypes', function tests() {

	it( 'should export an object', function test() {
		expect( dtypes ).to.be.an( 'object' );
	});

});
