// getter
const employee = {
  firstName: "rama",
  lastName: "chandra",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set inititalName(name) {
    this.firstName = name;
  },
};

console.log(employee.fullName);

// setter
employee.inititalName = "lakshman";
console.log(employee.fullName);
