'use strict';

// MODULES //

var props = require( './../properties/typedarray.js' );
var methods = require( './../methods' );


// DATA ARRAY //

class DataArray extends Float64Array {
	constructor( x ) {
		super( x );
		props( this, 'float64' );
	}
}

methods( DataArray.prototype );


// EXPORTS //

module.exports = DataArray;
