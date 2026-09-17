// Explicit Type Annotations
// Explicit typing means you tell typescript exactly what type a variable should be.
// Best practice: Use explicit types for function parameters and return types to make your code more maintainable and self-documenting.

const greeting: string = "Hello, Typescript";
const userCounter: number = 100;
let isLoading: boolean = true;
const scores: number [] = [100, 96, 98];

console.log (greeting, userCounter, isLoading, scores);

// Function with explicit types

function greet (name: string): string {
  return `Hello, ${name}`;
}

const message: string = greet ("Abu Rayhan Kobir");
console.log (message);

// Type inference
// Typescript can automatically determaine (infer) the type of a variable based on its initial value.

let username = "Abu Rayhan Kobir"; // Typescript infers "string"

let score = 100; // Typescript infers number

let flags = [true, false, true]; // Typescript infers boolean []

function sum (number1: number, number2: number) {
  return number1 + number2;
} // Typescript infers return type will be number 

interface Person {
  name: string;
  age: number;
  isAdmin: boolean;
}

const person: Person = {
  name: "Abu Rayhan Kobir",
  age: 30,
  isAdmin: true,
}; // Typescritpt inters the shape of the object

console.log (person.age);
console.log (person.name);
console.log (person.isAdmin);
