/**
 * Function Scope
 *
 * Definition:
 * Variables declared with var, let, or const inside a function
 * can only be accessed within that function.
 *
 * Key Points:
 * - Creates a local scope.
 * - Variables are destroyed after function execution completes.
 * - Outer scope cannot access inner scope variables.
 * - Inner functions can access outer function variables (Closure).
 */

function greet() {
  const message = "Hello";
  console.log(message); // Hello
}

greet();

// console.log(message); // ReferenceError: message is not defined
