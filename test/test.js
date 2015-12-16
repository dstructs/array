/* global require, describe, it */
'use strict';

var mpath = './../lib';


// MODULES //

var chai = require( 'chai' );
var proxyquire = require( 'proxyquire' );
var array = require( mpath );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'dstructs-array', function tests() {

	it( 'should export a function', function test() {
		expect( array ).to.be.a( 'function' );
	});

	it( 'should export a function which provides fewer guarantees when validating input arguments', function test() {
		expect( array.raw ).to.be.a( 'function' );
	});

	it( 'should use classes when classes are supported', function test() {
		var array = proxyquire( mpath, {
			'./detect.js': detect,
			'./array.js': fcn,
			'./array.raw.js': raw
		});

		assert.strictEqual( array(), 'beep' );
		assert.strictEqual( array.raw(), 'boop' );

		function detect() {
			return true;
		}
		function fcn() {
			return 'beep';
		}
		function raw() {
			return 'boop';
		}
	});

	it( 'should fallback to polyfills if `class` is not supported', function test() {
		var array = proxyquire( mpath, {
			'./detect.js': detect,
			'./polyfill.js': fcn,
			'./polyfill.raw.js': raw
		});

		assert.strictEqual( array(), 'beep' );
		assert.strictEqual( array.raw(), 'boop' );

		function detect() {
			return false;
		}
		function fcn() {
			return 'beep';
		}
		function raw() {
			return 'boop';
		}
	});

});
