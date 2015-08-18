Array
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Arrays.


## Installation

``` bash
$ npm install dstructs-array
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var array = require( 'dstructs-array' );
```

<a name="array"></a>
#### array( x[, dtype] )

Creates a new `array`. If `x` is `numeric`, the function returns a new `array` having the specified length.

``` javascript
var arr = array( 4 );
// returns Float64Array( [0,0,0,0] )
```

If `x` is a generic `array` or [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays), the function [casts](https://github.com/compute-io/cast-arrays) the input array to `float64`.

``` javascript
var arr = array( new Int8Array( 4 ) );
// returns Float64Array( [0,0,0,0] )

arr = array( [ 10, 20, 30, 40, 50, 60 ] );
// returns Float64Array( [10,20,30,40,50,60] )
```

By default, output `array` elements are floating-point 64-bit numbers (`float64`). To specify a different data type, provide a `dtype`.

``` javascript
var arr = array( 4, 'int8' );
// returns Int8Array( [0,0,0,0] )
```

The following [`dtypes`](https://github.com/compute-io/array-constructors) are accepted:

*	`int8`
*	`uint8`
*	`uint8_clamped`
*	`int16`
*	`uint16`
*	`int32`
*	`uint32`
*	`float32`
*	`float64`
*	`generic`


To cast an input `data` array to a different data type, provide a `dtype`.

``` javascript
var arr = array( new Float32Array( [1,2,3] ), 'uint32' );
// returns Uint32Array( [1,2,3] )
```


---
## Raw

For performance, a lower-level interface is provided which forgoes some of the guarantees of the above API, such as input argument validation. While use of the above API is encouraged in REPL environments, use of the lower-level interface may be warranted when arguments are of a known type or when many `arrays` must be created.



<a name="array-raw"></a>
#### array.raw( x[, dtype] )

Creates a new `array`.

``` javascript
var arr = array.raw( 4, 'int8' );
// returns Int8Array( [0,0,0,0] );

arr = array.raw( new Float32Array( [1,2,3,4] ) );
// returns Float64Array( [1,2,3,4] )
```



---
## Examples

``` javascript
var array = require( 'dstructs-array' ),
	len = 10;

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/dstructs-array.svg
[npm-url]: https://npmjs.org/package/dstructs-array

[travis-image]: http://img.shields.io/travis/dstructs/array/master.svg
[travis-url]: https://travis-ci.org/dstructs/array

[codecov-image]: https://img.shields.io/codecov/c/github/dstructs/array/master.svg
[codecov-url]: https://codecov.io/github/dstructs/array?branch=master

[dependencies-image]: http://img.shields.io/david/dstructs/array.svg
[dependencies-url]: https://david-dm.org/dstructs/array

[dev-dependencies-image]: http://img.shields.io/david/dev/dstructs/array.svg
[dev-dependencies-url]: https://david-dm.org/dev/dstructs/array

[github-issues-image]: http://img.shields.io/github/issues/dstructs/array.svg
[github-issues-url]: https://github.com/dstructs/array/issues
