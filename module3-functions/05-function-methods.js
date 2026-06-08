/**
 * Function methods
 * call(), apply(), and bind() are used to control what this refers to when a function executes.
 */

/**
 * call()
 * invokes the function immediately and allows you to set this.
 */

function greet(city) {
  console.log(`Hello, ${this.name} from city ${city}`);
}

const person = {
  name: "Rama",
};

greet.call(person, "London");

/**
 * apply()
 * Almost same as call(), but arguments are passed as an array.
 */

function greetA(city, country) {
  console.log(`Hello, ${this.name} from city ${city}, ${country}`);
}

const personA = {
  name: "Rama",
};

greetA.apply(personA, ["London", "UK"]);

/**
 * bind()
 * It returns a new function with this permanently bound.
 * Parameters should only be passed as separate like call
 */

function greetB(city, country) {
  console.log(`Hello, ${this.name} from city ${city}, ${country}`);
}

const personB = {
  name: "Rama",
};

const newGreet = greetB.bind(personB, "London", "UK");
newGreet();
