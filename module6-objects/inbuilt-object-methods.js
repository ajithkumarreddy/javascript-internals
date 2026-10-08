const user = {
  name: "rama",
  age: 20,
  role: "admin",
};

// Object.keys
for (let key of Object.keys(user)) {
  console.log(key);
}

// Object.values
for (let value of Object.values(user)) {
  console.log(value);
}

// Object.entries
for (let [key, value] of Object.entries(user)) {
  console.log(key, value);
}

// Object.assign
const newUser = Object.assign({}, user);
console.log(newUser); // Shallow copy

// in operator (property check / only keys)
console.log("name" in user); // true

/**
 * The ?. basically means:
"If this value exists, continue. Otherwise give me undefined."
 */

const person = {
  profile: {
    address: {
      city: "Bengaluru",
    },
  },
};

console.log(person.profile?.address?.city); // Bengaluru

/**
 * Nullish Coalescing ??
 * || → fallback for falsy values
 * ?? → fallback only for null/undefined
 */
const name = null;

const result = name ?? "Guest";

console.log(result);
