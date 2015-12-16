/* global require, describe, it */
'use strict';

var mpath = './../lib/detect.js';


// MODULES //

var chai = require( 'chai' );
var proxyquire = require( 'proxyquire' );
var detect = require( mpath );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'detect class support', function tests() {

	it( 'should export a function', function test() {
		expect( detect ).to.be.a( 'function' );
	});

	it( 'should return a boolean', function test() {
		assert.isBoolean( detect() );
	});

	it( 'should return `true` if `class` is supported', function test() {
		var detect = proxyquire( mpath, {
			'./eval.js': stub
		});

		assert.isTrue( detect() );

		function stub() {
			return 'beep';
		}
	});

	it( 'should return `false` if `class` is not supported', function test() {
		var detect = proxyquire( mpath, {
			'./eval.js': stub
		});

		assert.isFalse( detect() );

		function stub() {
			throw new Error( 'boop' );
		}
	});

});
