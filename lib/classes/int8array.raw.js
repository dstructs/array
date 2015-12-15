'use strict';

// MODULES //

var props = require( './../properties/typedarray.raw.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Int8Array {
	constructor( x ) {
		super( x );
		props( this, 'int8' );
	}
}

methods( DataArray.prototype, {'raw':true} );


// EXPORTS //

module.exports = DataArray;
