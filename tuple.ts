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