/**
 * Closures
 *
 * Definition:
 * A Closure is created when a function remembers and
 * continues to access variables from its lexical scope
 * even after the outer function has finished executing.
 *
 * Key Points:
 * - Closures are created automatically in JavaScript.
 * - Closures rely on Lexical Scope.
 * - Inner functions can remember outer variables.
 * - The remembered variables are not garbage collected
 *   as long as the closure still references them.
 */

function outer() {
  const company = "Google";

  function inner() {
    console.log(company);
  }

  return inner;
}

const fn = outer();
fn(); // Google
