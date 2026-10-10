/**
 * Static method of classes
 * It only belongs to the class but not for the object created
 */

class User {
  constructor(name) {
    this.name = name;
  }

  static createAdmin(name) {
    return new User(name);
  }
}

const admin = User.createAdmin("Rama");
console.log(admin.name);

// admin.createAdmin("saint"); // TypeError: admin.createAdmin is not a function
