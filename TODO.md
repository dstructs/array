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
6. 
