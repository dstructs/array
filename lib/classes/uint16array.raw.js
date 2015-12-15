'use strict';

// MODULES //

var props = require( './../properties/typedarray.raw.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Uint16Array {
	constructor( x ) {
		super( x );
		props( this, 'uint16' );
	}
}

methods( DataArray.prototype, {'raw':true} );


// EXPORTS //

module.exports = DataArray;
