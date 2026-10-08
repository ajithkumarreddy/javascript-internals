/**
 * Parameters
 * A parameter is a variable listed in a function definition
 * that receives values when the function is called.
 *
 * Arguments
 * Actual values passed when calling the function
 */

function greet(name) {
  // name is a parameter
  console.log(`Hello, ${name}`);
}

/**
 * Destructuring parameters
 */

// Object
function displayUser({ name, age }) {
  console.log(name, user);
}

displayUser({ name: "Rama", age: "26" });

// Array
function display([first, second]) {
  console.log(first, second);
}

display([10, 20]);
