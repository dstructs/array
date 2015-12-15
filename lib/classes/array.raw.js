'use strict';

// MODULES //

var props = require( './../properties/array.raw.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Array {
	constructor( len ) {
		super( len );
		props( this );
	}
	get shape() {
		return [ this.length, 1 ];
	}
}

methods( DataArray.prototype, {'raw':true} );


// EXPORTS //

module.exports = DataArray;
