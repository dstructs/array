/* global require, describe, it */
'use strict';

var mpath = './../lib/compile.js';


// MODULES //

var chai = require( 'chai' );
var proxyquire = require( 'proxyquire' );
var dtypes = require( './../lib/dtypes.js' );
var compile = require( mpath );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'compile constructors', function tests() {

	var KEYS = Object.keys( dtypes );
	var LEN = KEYS.length;

	it( 'should export a function', function test() {
		expect( compile ).to.be.a( 'function' );
	});

	it( 'should return an object containing constructors', function test() {
		var compile;
		var ctors;
		var i;

		compile = proxyquire( mpath, {
			'./generate.js': generate
		});

		ctors = compile();
		for ( i = 0; i < LEN; i++ ) {
			assert.strictEqual( ctors[ KEYS[i] ], Array );
		}

		function generate() {
			return Array;
		}
	});

	it( 'should return an object containing raw constructors', function test() {
		var compile;
		var ctors;
		var i;

		compile = proxyquire( mpath, {
			'./generate.js': generate
		});

		ctors = compile( {'raw':true} );
		for ( i = 0; i < LEN; i++ ) {
			assert.strictEqual( ctors[ KEYS[i] ], Array );
		}

		function generate() {
			return Array;
		}
	});

});
