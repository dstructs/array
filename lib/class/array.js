'use strict';

// MODULES //

var props = require( './../props.array.js' );
var methods = require( './../methods.js' );


// DATA ARRAY //

class DataArray extends Array {
	constructor( len ) {
		if ( len === void 0 ) {
			len = 0;
		}
		super( len );
		props( this );
	}
	get shape() {
		return [ this.length, 1 ];
	}
}

var keys = Object.keys( methods );
for ( var i = 0; i < keys.length; i++ ) {
	DataArray.prototype[ keys[i] ] = methods[ keys[i] ];
}


// EXPORTS //

module.exports = DataArray;
