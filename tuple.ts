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