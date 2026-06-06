/**
 * const keyword
 * Used when a variable should not be reassigned.
 *
 * 1. Cannot be reassigned
 * 2. Cannot be redeclared
 * 3. Block scoped
 * 4. Must be initialized during declaration
 * 5. Hoisted but not initialized (Temporal Dead Zone)
 */

// Cannot be reassigned
// name = "Kumar"; // TypeError

// Cannot be redeclared
// const name = "John"; // SyntaxError

// Block Scope
if (true) {
  const age = 25;
  console.log(age); // 25
}
// console.log(age); // ReferenceError

// Must be initialized
const name = "Ajith";
console.log(name);

// Temporal Dead Zone (TDZ)
// console.log(city); // ReferenceError
const city = "Bangalore";
