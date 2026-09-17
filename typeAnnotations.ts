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