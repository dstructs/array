'use strict';

// MODULES //

var cast = require( 'dstructs-cast-arrays' );
var copy = require( 'utils-copy' );
var getCtor = require( './ctor.js' );


// TOJSON //

/**
* FUNCTION: toJSON()
*	Returns a JSON representation of an array.
*
* @returns {Object} JSON representation
*/
function toJSON() {
	/* jshint validthis: true */
	var prop;
	var out;

	out = {};
	out.type = getCtor( this );
	out.dtype = this.dtype;
	out.shape = copy( this.shape );
	out.offset = this.offset;
	out.strides = copy( this.strides );

	prop = Object.getOwnPropertyDescriptor( this, 'dtype' );
	out.raw = prop.writable && prop.configurable && prop.enumerable;

	// Cast the data to a generic array:
	out.data = cast( this, 'generic' );

	return out;
} // end FUNCTION toJSON()


// EXPORTS //

module.exports = toJSON;
