// one string comment
/*
    multiple string comment
*/
/**
 * JSdoc comment
 */

/**
 * Data types:
 * 1. Primitive
 * - Number: 2023, 1.3, NaN, Infinity
 * - String: 'Hello, "Hello", `Hello`
 * - Boolean: true, false
 * - Null: null
 * - Undefined: undefined
 * - Symbol()
 */

console.log(2023, 1.3);
console.log(20 * "a");
console.log(20 / 0);
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.isSafeInteger(900000000))

console.log("Hello", "Hello", `Hello`);

console.log(true, false);

console.log(null);

console.log(undefined);

console.log(Symbol());

/**
 * Data types:
 * 2. Objects. (Reference type) By reference.
 * - Object: {name: 'Alex', age: 49}
 *  * Array: [1, 2, 3]
 *  * Function: function foo() {}
 *  * Date: new Date()
 *  ....
 */

console.table({ name: "Alex", age: 49 });
console.log({ name: "Alex", age: 49 });
console.log([1, 2, 3]);

/**
 * Peculiar properties
 * 1. Dynamically typed language
 * 2. The same variable can keep any data type
 * 3. We dont't need set data type during variable initialize
 * 4. If we want use static typization we can use TypeScript or Flow
 */
