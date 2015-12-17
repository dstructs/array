TODO
====

1. Consider extending the api to match some of the `matrix` methods
2. move check for native class support to separate module
	-	`is-class-supported`
3. allow `Object` as a constructor name
	-	would allow creating a "sparse" vector
	-	need to create a `length` property
	-	would `length` be dynamic (`Array`) or fixed (`typed-array`)?
4. `toString()`
	-	consider using either `;` or `,` as the delimiter to distinguish between row and column vectors
5. handle generic `arrays` being pre-allocated with `>64K` elements
6. instead of `DataArray`, consider `Vector`
7. add a `get nbytes()` method to generic `array`
	-	check if all elements are `numeric`
		-	if so, assume `8bytes`
		-	else `null`
	-	note: cannot guarantee an `integer` array is stored using 32-bit `integers`.
	-	a note should be included in the README that, for generic `arrays`, `nbytes` is an estimate, not truth
8. how would a user specify a row versus a column vector?
	-	internally, we would just update the shape `array`
	-	is this important? needed? Probably not computationally. Just for output (?).
	-	maybe allow an input parameter to `toString()` / pretty-print to show as row or column vector
9. add raw and non-raw constructors to main export
	-	maybe (?)
	-	only if `class` support
10. add tests for generic array and `shape` and `nbytes` setters
	-	test validation
	-	test `nbytes` getter when numeric `array`
11. 
12. update README
13. move `eval.js` to separate module
	- 	`utils-eval`
	- 	similar intent as `utils-platform`
14. should empty generic `arrays` be zero-filled?
	-	necessary for >64K elements
15. 
