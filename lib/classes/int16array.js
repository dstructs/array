'use strict';

// MODULES //

var props = require( './../properties/typedarray.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Int16Array {
	constructor( x ) {
		super( x );
		props( this, 'int16' );
	}
}

methods( DataArray.prototype );


// EXPORTS //

module.exports = DataArray;
