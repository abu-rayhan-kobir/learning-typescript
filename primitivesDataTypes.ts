/*

--------------Typescript primitives types-----------------
1. Boolean
2. Number
3. String
4. BigInt
5. Symbol
6. undefined
7. null

*/ 

// -------------Boolean-------------
let isActive: boolean = true;
let isLoggedIn: boolean = false;

console.log (isActive);
console.log (isLoggedIn);

// -------------Number--------------
// Represents both integers and floating-point numbers.

let decimalInt: number = 10;
let decimalFloat: number = 10.60;
let binary: number = 0b1010;
let octal: number = 0o744;
let hex: number = 0xf00d;

console.log (decimalInt);
console.log (decimalFloat);
console.log (binary);
console.log (octal);
console.log (hex);

// -------------String--------------
// 1. Represent text data
// 2. Can use single quotes (''), double quotes ("") or backticks (``) for template literals.

let color: string = "red";
let username: string = 'Abu Rayhan Kobir';
let age: number = 30;
let sentence: string = `My name is ${username} and I am ${age} years old.`;

console.log (color);
console.log (username);
console.log (sentence);

// --------------BigInt--------------------
// Represents whole numbers larger than 2^53 - 1
const bigNumber: BigInt = BigInt (9007199254740991);
console.log (bigNumber);

// -------------Symbol---------------------
// Symbol হলো এমন একটি unique value, যেটা প্রতিবার তৈরি করলে আলাদা হয়।

const id1: symbol = Symbol ("101");
const id2: symbol = Symbol ("101");

if (id1 === id2) {
  console.log ("They are same");
} else {
  console.log ("They are not same");
}

// ----------------undefined--------------
let number;
console.log (number); // output will be undefined

let user = null;
console.log  (user);