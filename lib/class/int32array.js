'use strict';

// MODULES //

var props = require( './../props.typedarray.js' );
var methods = require( './../methods.js' );


// DATA ARRAY //

class Int32DataArray extends Int32Array {
	constructor( x ) {
		super( x );
		props( this, 'int32' );
	}
}

var keys = Object.keys( methods );
for ( var i = 0; i < keys.length; i++ ) {
	Int32DataArray.prototype[ keys[i] ] = methods[ keys[i] ];
}


// EXPORTS //

module.exports = Int32DataArray;
