/**
 * let keyword
 * Used when a variable's value needs to change.
 *
 * 1. Can be reassigned
 * 2. Cannot be redeclared in the same scope
 * 3. Block scoped
 * 4. Hoisted but not initialized (Temporal Dead Zone)
 */

// Reassignment
let age = 25;
age = 26;
console.log(age); // 26

// Cannot be redeclared
let ageA = 25;
// let ageA = 26; // SyntaxError

// Block Scope
if (true) {
  let ageB = 30;
  console.log(ageB); // 30
}
// console.log(ageB); // ReferenceError

// Temporal Dead Zone (TDZ)
// console.log(city); // ReferenceError
let city = "Bangalore";
console.log(city);
