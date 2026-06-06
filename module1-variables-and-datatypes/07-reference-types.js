/**
 * Reference Types
 *
 * 1. Object
 * 2. Array
 * 3. Function
 *
 * Reference types store references (memory addresses),
 * not the actual value directly.
 */

/**
 * Object
 * Collection of key-value pairs.
 */
const person = {
  name: "Rama",
  age: 25,
};

person.name = "Lakshman";

console.log(person.name); // Lakshman
console.log(typeof person); // object

/**
 * Array
 * Ordered collection of values.
 */
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple

fruits.push("Mango");

console.log(fruits);
// ["Apple", "Banana", "Orange", "Mango"]

console.log(typeof fruits); // object
console.log(Array.isArray(fruits)); // true

/**
 * Function
 * Reusable block of code.
 * Functions are special objects in JavaScript.
 */
function greet() {
  console.log("Hello");
}

greet(); // Hello

console.log(typeof greet); // function