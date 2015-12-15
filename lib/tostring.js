'use strict';

/**
* FUNCTION: toString()
*	Returns a string representation of array elements.
*
* @returns {String} string representation
*/
function toString() {
	/* jshint validthis: true */
	var len = this.length;
	var str = '';
	var i;
	for ( i = 0; i < len; i++ ) {
		str += this[ i ];
		if ( i < len-1 ) {
			// TODO: consider ';' to indicate column vector
			str += ',';
		}
	}
	return str;
} // end FUNCTION toString()


// EXPORTS //

module.exports = toString;
