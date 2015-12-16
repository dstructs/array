/* global require, describe, it */
'use strict';

var mpath = './../lib/ctors.js';


// MODULES //

var chai = require( 'chai' );
var proxyquire = require( 'proxyquire' );
var dtypes = require( './../lib/dtypes.js' );
var ctors = require( mpath );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'constructors', function tests() {

	var KEYS = Object.keys( dtypes );
	var LEN = KEYS.length;

	it( 'should export a function', function test() {
		expect( ctors ).to.be.a( 'function' );
	});

	it( 'should return an object containing constructors', function test() {
		var ctors;
		var out;
		var i;

		ctors = proxyquire( mpath, {
			'./generate.js': generate
		});

		out = ctors();
		for ( i = 0; i < LEN; i++ ) {
			assert.strictEqual( out[ KEYS[i] ], Array );
		}

		function generate() {
			return Array;
		}
	});

	it( 'should return an object containing raw constructors', function test() {
		var ctors;
		var out;
		var i;

		ctors = proxyquire( mpath, {
			'./generate.js': generate
		});

		out = ctors( {'raw':true} );
		for ( i = 0; i < LEN; i++ ) {
			assert.strictEqual( out[ KEYS[i] ], Array );
		}

		function generate() {
			return Array;
		}
	});

});
