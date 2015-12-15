'use strict';

// MODULES //

var props = require( './../properties/typedarray.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Int8Array {
	constructor( x ) {
		super( x );
		props( this, 'int8' );
	}
}

methods( DataArray.prototype );


// EXPORTS //

module.exports = DataArray;
