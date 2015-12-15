'use strict';

// MODULES //

var props = require( './../properties/typedarray.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Uint16Array {
	constructor( x ) {
		super( x );
		props( this, 'uint16' );
	}
}

methods( DataArray.prototype );


// EXPORTS //

module.exports = DataArray;
