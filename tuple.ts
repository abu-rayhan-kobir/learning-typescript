let user: [string, number, boolean] = ["Abu Rayhan Kobir", 25, true];
console.log (user);

type Student = readonly [string, number, string];
const students: Student [] = [
  ["Abu Rayhan Kobir", 21, "Dinajpur Government College, Dinajpur"],
  ["Md. Rajib Islam", 21, "Dinajpur Government College, Dinajpur"],
];

console.log (students[0]);


type Point = [number, number];
const location: Point = [12, 15];
const dhakaLocation: Point = [23.7330, 90.40];

console.log (location);
console.log (dhakaLocation);

type Player = [string, string, number];
const players: Player [] = [
  ["rolando", "portugal", 7],
  ["messi", "argentina", 10],
];

type OrderItem = readonly [number, number];
const item: OrderItem = [7, 24];
console.log (item);

type DivisionValue = readonly [number, number];
function divide (number1: number, number2: number): DivisionValue {
  if (number2 === 0) {
    throw new Error ("Divisiable by zero is not possible!");
  } else {
    return [Math.floor((number1 / number2)), number1 % number2];
  }
}

const result: DivisionValue = divide (9, 7);
console.log (result);