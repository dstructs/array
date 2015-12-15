'use strict';

// MODULES //

var props = require( './../properties/typedarray.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Uint8Array {
	constructor( x ) {
		super( x );
		props( this, 'uint8' );
	}
}

methods( DataArray.prototype );


// EXPORTS //

module.exports = DataArray;
