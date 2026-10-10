/**
 * Class
 * A class is a blueprint for creating objects.
 */

class User {
  role = "admin"; // Class properties

  constructor(name) {
    // Class constructor - executes as soon as new is called
    this.name = name;
  }

  greet() {
    // Class methods
    console.log(`Hello ${this.name}`);
  }

  sayBye() {
    console.log(`Bye ${this.name}`);
  }
}

const user = new User("Rama");
user.greet();
user.sayBye();
console.log(user.role);
