/**
 * Lexical Scope
 *
 * Definition:
 * Scope is determined by where code is written, not where it is executed.
 *
 * Functions can access variables from their parent scope.
 * Inner functions can access outer variables.
 * Outer functions cannot access inner variables.
 */

const company = "Google";

function outer() {
  const department = "Engineering";

  function inner() {
    console.log(company); // Google
    console.log(department); // Engineering
  }

  inner();
}

outer();
