/**
 * Hoisting
 *
 * Hoisting is JavaScript's behavior of moving
 * declarations to memory before code execution.
 *
 * JavaScript Execution Context:
 * 1. Memory Creation Phase
 * 2. Execution Phase
 */

/**
 * Hoisting with var
 */
console.log(a); // undefined

var a = 10;

/**
 * Hoisting with function declarations
 */
greet(); // Hello

function greet() {
  console.log("Hello");
}

/**
 * Hoisting with function expressions
 */
sayHello(); // TypeError: sayHello is not a function

var sayHello = function () {
  console.log("Hello");
};

/**
 * Hoisting with let
 */
console.log(city); // ReferenceError

let city = "Bangalore";

/**
 * Hoisting with const
 */
console.log(country); // ReferenceError

const country = "India";

/**
 * Temporal Dead Zone (TDZ)
 *
 * TDZ is the period between entering a scope
 * and the variable declaration being executed.
 *
 * let and const are hoisted but remain
 * inaccessible inside the TDZ.
 */

// TDZ Example
console.log(age); // ReferenceError

let age = 25;