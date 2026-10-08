/**
 * Rest parameters
 * Rest Parameters collect multiple arguments into an array.
 * Rest Parameters must be at last
 */

function sum(...numbers) {
    console.log(numbers);
}

sum(1, 2, 3); // [1, 2, 3]