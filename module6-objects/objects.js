/**
 * Object - Collections of key, value pair
 */

const user = {
  name: "rama",
  age: 20,
  role: "admin",
  greet: function () {
    console.log(this.name);
  },
};

console.log(user.name); // rama

// update
user.age = 21;
console.log(user.age); // 21

// delete
delete user.role;
console.log(user);

// function
user.greet(); // rama
