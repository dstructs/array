'use strict';

var array = require( './../lib' );
var len = 10;

// Default array:
console.log( array( len ) );

// int8 array:
console.log( array( len, 'int8' ) );

// uint8 array:
console.log( array( len, 'uint8' ) );

// uint8_clamped array:
console.log( array( len, 'uint8_clamped' ) );

// int16 array:
console.log( array( len, 'int16' ) );

// uint16 array:
console.log( array( len, 'uint16' ) );

// int32 array:
console.log( array( len, 'int32' ) );

// uint32 array:
console.log( array( len, 'uint32' ) );

// float32 array:
console.log( array( len, 'float32' ) );

// float64 array:
console.log( array( len, 'float64' ) );

// Generic array:
console.log( array( len, 'generic' ) );



