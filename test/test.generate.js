/* global require, describe, it */
'use strict';

var mpath = './../lib/generate.js';


// MODULES //

var chai = require( 'chai' );
var proxyquire = require( 'proxyquire' );
var generate = require( mpath );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'generate', function tests() {

	it( 'should export a function', function test() {
		expect( generate ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an unrecognized/unsupported constructor name', function test() {
		var values;
		var i;

		values = [
			'beep',
			5,
			NaN,
			true,
			null,
			undefined,
			[],
			{},
			function(){},
			'int128',
			'Object',
			'Function',
			'Boolean',
			'String',
			'RegExp',
			'Int128Array',
			'DataArray'
		];

		for ( i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function badValue() {
				generate( value );
			};
		}
	});

	it( 'should throw an error if classes are not supported', function test() {
		var generate = proxyquire( mpath, {
			'./create.js': create
		});

		expect( foo ).to.throw( Error );

		function foo() {
			generate( 'Array' );
		}
		function create() {
			return 'throw new Error( "beep" );';
		}
	});

	it( 'should return a constructor if classes are supported', function test() {
		var generate;
		var ctor;

		generate = proxyquire( mpath, {
			'./create.js': create
		});

		ctor = generate( 'Array' );
		assert.isTrue( Array.isArray( ctor() ) );

		ctor = generate( 'Array', {'raw':true} );
		assert.isTrue( Array.isArray( ctor() ) );

		function create() {
			return '(function create() { function Beep() { return new Array(); } return Beep; })();';
		}
	});

});
