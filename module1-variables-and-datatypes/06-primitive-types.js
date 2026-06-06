/**
 * Primitive Data Types in JavaScript
 */

// String
let name = "Rama";
console.log(typeof name); // string

// Template Literals
console.log(`Hello ${name}`); // Hello Rama

// Number
let age = 26;
let price = 99.99;
console.log(typeof age); // number
console.log(typeof price); // number

// Boolean
let isDeveloper = true;
console.log(typeof isDeveloper); // boolean

// Undefined
let city;
console.log(city); // undefined
console.log(typeof city); // undefined

// Null (Intentional absence of value)
let selectedUser = null;
console.log(selectedUser); // null
console.log(typeof selectedUser); // object (JavaScript bug)

// BigInt
const big = 9999999999999999n;
console.log(typeof big); // bigint

// Symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false
console.log(typeof id1); // symbol
