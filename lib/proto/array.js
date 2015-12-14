'use strict';

// MODULES //

var ctors = require( 'dstructs-array-constructors' );
var props = require( './../props.array.js' );
var methods = require( './../methods.js' );


// VARIABLES //

var KEYS = Object.keys( methods );
var N = keys.length;


// DATA ARRAY //

/**
* FUNCTION: DataArray( len )
*	Creates an array.
*
* @param {Number} len - array length
* @returns {Array} array
*/
function DataArray( len ) {
	/* jshint newcap: false */
	var ctor;
	var arr;
	var i;
	if ( len === void 0 ) {
		len = 0;
	}
	if ( !( this instanceof DataArray ) ) {
		return new DataArray( len );
	}
	ctor = ctors( 'generic' );

	// FIXME: if len > 64K, will be sparse
	// TODO: support `len` being an `Array`

	arr = new ctor( len );

	// Add properties to the array instance...
	props( arr );

	// Add methods to the array instance...
	for ( i = 0; i < N; i++ ) {
		arr[ KEYS[ i ] ] = methods[ KEYS[ i ] ];
	}
	return arr;
} // end FUNCTION DataArray()


// EXPORTS //

module.exports = DataArray;
