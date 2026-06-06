/**
 * Block Scope
 *
 * Definition:
 * A block is any code wrapped inside curly braces {}.
 * 
 * Block Scope means variables declared using let and const are only accessible within the block {} where they are declared. 
 * Variables declared using var do not follow block scope and remain accessible outside the block.
 *
 * Variables declared with let and const are block scoped.
 * Variables declared with var are NOT block scoped.
 */

// Example 1
{
  const name = "Rama";
}

// console.log(name); // ReferenceError

// Example 2
if (true) {
  const age = 26;
  console.log(age);
}

// console.log(age); // ReferenceError

// Example 3
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// console.log(i); // ReferenceError

// var ignores block scope
if (true) {
  var city = "Bangalore";
  console.log(city);
}

console.log(city); // Bangalore

// Nested block scope
const country = "India";

{
  const state = "Karnataka";
  {
    const city = "Bangalore";
    console.log(country); // India
    console.log(state); // Karnataka
    console.log(city); // Bangalore
  }
}

// Variable shadowing
const name = "Lakshman";

{
    const name = "Rama";
    console.log(name); // Rama
}

console.log(name); // Ajith