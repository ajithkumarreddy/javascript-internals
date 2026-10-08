/**
 * Default parameters
 * were introduced in ES6 and allow you to assign default values to
 * function parameters.
 * If an argument is not provided (or is undefined), the default value is used.
 */

function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest

/**
 * Default param can use earlier params
 */

function calculatePrice(price, tax = price * 0.18) {
  return price + tax;
}

console.log(calculatePrice(100)); // 118

/**
 * Destructuring with default params
 */

function displayName({ name = "Guest", age = 10 } = {}) {
  console.log(name, age);
}

displayName();
