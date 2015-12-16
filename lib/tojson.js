'use strict';

// MODULES //

var cast = require( 'dstructs-cast-arrays' );
var copy = require( 'utils-copy' );


// TOJSON //

/**
* FUNCTION: toJSON()
*	Returns a JSON representation of an array.
*
* @returns {Object} JSON representation
*/
function toJSON() {
	/* jshint validthis: true */
	var out;

	out = {};
	out.type = Object.getPrototypeOf( this.constructor ).name;
	out.dtype = this.dtype;
	out.shape = copy( this.shape );
	out.strides = copy( this.strides );
	out.offset = this.offset;
	out.data = cast( this, 'generic' );

	return out;
} // end FUNCTION toJSON()


// EXPORTS //

module.exports = toJSON;
