// public and private properties

class User {
  #password; // private

  constructor(name, password) {
    this.name = name; // public
    this.#password = password;
  }
}

const user = new User("Rama", "12345");
console.log(user.name);
// console.log(user.#password); // not accessible

// private method
class Auth {
  #validate() {
    console.log("validating...");
  }

  login() {
    this.#validate();
    console.log("login...");
  }
}

const newUser = new Auth();
newUser.login();
