'use strict';

// MODULES //

var props = require( './../props.typedarray.js' );
var methods = require( './../methods.js' );


// DATA ARRAY //

class Uint16DataArray extends Uint16Array {
	constructor( x ) {
		super( x );
		props( this, 'uint16' );
	}
}

var keys = Object.keys( methods );
for ( var i = 0; i < keys.length; i++ ) {
	Uint16DataArray.prototype[ keys[i] ] = methods[ keys[i] ];
}


// EXPORTS //

module.exports = Uint16DataArray;
