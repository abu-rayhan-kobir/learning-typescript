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
 
type Shape = Rectangle | Circle;

function area (shape: Shape): number {
  if ("radius" in shape) {
    return (Math.PI * Math.pow(shape.radius, 2));
  } else {
    return (shape.height * shape.width);
  }
}
const circle: Circle = {radius: 40};
const rectangle: Rectangle = {height: 10, width: 20};
const areaOfCircle: number = area (circle);
const areaOfRectangle: number = area (rectangle);

console.log (areaOfCircle);
console.log (areaOfRectangle);