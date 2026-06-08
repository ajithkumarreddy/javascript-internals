/**
 * Function expression
 * A function expression is a function that is assigned to a variable
 * Unlike Function Declarations, the function is treated like a value and stored in a variable
 */

const add = function (a, b) {
  return a + b;
};

console.log(add(1, 3)); // 4

/**
 * Anonymous function expression
 */

const greetA = function () {
  console.log("Hello");
};

greetA(); // Hello

/**
 * Named function expression
 */

const greetB = function sayHello() {
  console.log("Hello");
};

greetB(); // Hello
