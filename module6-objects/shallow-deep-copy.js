// shallow - top level object
const user = {
  name: "Rama",
  address: {
    city: "Bengaluru",
  },
};

const copy = { ...user };
copy.name = "Ajith";
copy.address.city = "Bangalore";
console.log(user);
console.log(copy);

// deep
const person = {
  name: "Rama",
  address: {
    city: "Bengaluru",
  },
};

const copied = structuredClone(person);

// Change copy
copied.name = "Ajith";
copied.address.city = "Bangalore";

console.log(person);
console.log(copied);

console.log(person.address === copied.address);
