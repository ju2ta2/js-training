let value;

// Number to string
value = String(10);
value = String(10 + 10);
value = (40).toString();

// Boolean to string
value = String(true);

// Array to string
value = String([1, 2, 3]);

// Object to string
value = String({name: 'Den'}); // [object Object] string

value = 30 + '' + 20; // string
value = 30 - ''; // 30 number
value = 30 * ''; // 0 number
value = 30 / ''; // infinity number
value = 30 - '5'; // 25 number
value = true + 10; // 11 number
value = false + 10; // 10 number
value = false + undefined; // NaN number
value = 30 + '' + undefined; // 30undefined string

// String to number
value = Number('23') // 23 number
value = Number(true) // 1 number
value = Number(null) // 0 number
value = Number('false') // NaN number
value = Number([1, 2, 3]); // NaN number

value = parseInt('200') // 200 number
value = parseInt('200px') // 200 number
value = parseInt(' 200px') // 200 number
value = parseInt('px200') // NaN number

value = parseFloat('200.12px') // 200.12 number

// To boolean
value = Boolean('hello') // true boolean
value = Boolean('') // false boolean
value = Boolean(' ') // true boolean
value = Boolean(-10) // true boolean
value = Boolean(0) // false boolean
value = Boolean(undefined) // false boolean
value = Boolean(null) // false boolean
value = Boolean({}) // true boolean
value = Boolean([]) // true boolean

console.log(value);
console.log(typeof value);