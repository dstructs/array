'use strict';

// MODULES //

var props = require( './../props.typedarray.js' );
var methods = require( './../methods.js' );


// DATA ARRAY //

class Int16DataArray extends Int16Array {
	constructor( x ) {
		super( x );
		props( this, 'int16' );
	}
}

var keys = Object.keys( methods );
for ( var i = 0; i < keys.length; i++ ) {
	Int16DataArray.prototype[ keys[i] ] = methods[ keys[i] ];
}


// EXPORTS //

module.exports = Int16DataArray;
