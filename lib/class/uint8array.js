'use strict';

// MODULES //

var props = require( './../props.typedarray.js' );
var methods = require( './../methods.js' );


// DATA ARRAY //

class Uint8DataArray extends Uint8Array {
	constructor( x ) {
		super( x );
		props( this, 'uint8' );
	}
}

var keys = Object.keys( methods );
for ( var i = 0; i < keys.length; i++ ) {
	Uint8DataArray.prototype[ keys[i] ] = methods[ keys[i] ];
}


// EXPORTS //

module.exports = Uint8DataArray;
