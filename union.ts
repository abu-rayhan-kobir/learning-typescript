let id: string | number;
id = 202;
console.log (id);
id = "ip-1012";
console.log (id);

type TUserId = string | number;
const userId1: TUserId = "ip-1012";
const userId2: TUserId = 2020;

console.log (userId1, userId2);

type Rectangle = {
  height: number;
  width: number;
};

type Circle = {
  radius: number;
}

type Square = {
  length: number;
}
 
type Shape = Rectangle | Circle | Square;

function area (shape: Shape): number {
  if ("radius" in shape) {
    return (Math.PI * Math.pow(shape.radius, 2));
  } else if ("length" in shape) {
    return Math.pow (2, shape.length);
  } else {
    return shape.height * shape.width;
  }
}
const square: Square = {length: 20};
const circle: Circle = {radius: 40};
const rectangle: Rectangle = {height: 10, width: 20};
const areaOfCircle: number = area (circle);
const areaOfRectangle: number = area (rectangle);
const areaOfSquare: number = area (square);

console.log (areaOfSquare);
console.log (areaOfCircle);
console.log (areaOfRectangle);