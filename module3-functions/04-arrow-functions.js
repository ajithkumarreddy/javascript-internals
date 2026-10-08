/**
 * Arrow functions
 * Arrow Functions are ES6 functions with shorter syntax that use lexical this,
 * support implicit returns,
 * do not have their own arguments object, and cannot be used as constructors.
 */

const add = (a, b) => {
  return a + b; // Explicit return
};

/**
 * Implicit return
 */

const addA = (a, b) => a + b;

/**
 * Returning objects
 */

const getUser = () => ({
  name: "Rama",
});
const user = getUser();
console.log(user.name);

/**
 * Arrow functions and this keyword
 */

// Normal function
const users = {
  name: "Rama",

  greet: function () {
    console.log(this.name);
  },
};

users.greet(); // Rama

/**
 * Arrow function
 * They do not create their own this
 * They inherit this from surrounding scope (Lexical this)
 */
const userA = {
  name: "Lakshman",

  greet: () => {
    console.log(this.name);
  },
};

userA.greet(); // undefined

/**
 * Arrow functions cannot be constructors
 */

function PersonA(name) {
  this.name = name;
}
const p = new PersonA("Rama");

const PersonB = (name) => {
  this.name = name;
};

// const p = new PersonB("Rama"); // Person is not a constructor

/**
 * Arrow function doesn't have arguments
 * Hence use Rest parameters
 */

const fn = (...args) => args;
