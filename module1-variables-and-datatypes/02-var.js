/**
 * var keyword
 * var is a keyword used to declare variables in JavaScript.
 *
 * 1. Can be reassigned
 * 2. Can be redeclared
 * 3. Function scoped
 * 4. Hoisted and intialized with undefined
 */

// Reassignment
var name = "Rama";
name = "Lakshman";
console.log(name); // Lakshman

// Redeclaration
var city = "Bangalore";
var city = "Hyderabad";
console.log(city); // Hyderabad

// Function scope
function done() {
  var age = 25;
  console.log(age); // 25
}

done();
// console.log(age); // ReferenceError

// Hoisting
console.log(company); // undefined
var company = "Google";
