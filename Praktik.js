// Praktik Fundamentals
let age = 25;
console.log("Age:", age);
let name = "Alice";
console.log("Name:", name);
let isStudent = true;
console.log("Is Student:", isStudent);
let hobbies = ["reading", "coding", "gaming"];
console.log("Hobbies:", hobbies);
let person = {
  firstName: "John",
  lastName: "Dhoe",
  age: 30,
};
console.log("Person:", person);

// Praktik Function
function printHeart() {
  console.log("<3");
}
printHeart();

function multiply(a, b) {
  return a * b;
}
console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

const sayHello = (name) => {
  return `Hello ${name}!`;
};

console.log(sayHello("Hagrid")); // Hello Hagrid!
console.log(sayHello("Luna")); // Hello Luna!

// Praktik Controll Flow
for (let i = 0; i < 6; i++) {
  console.log("Da ba dee da ba daa");
}

// Practice 2
for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}

// Iterating Arrays Exercise
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
