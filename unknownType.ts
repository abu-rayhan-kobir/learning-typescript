

let value: unknown = 10;
// value.toFixed(2) get an error
if (typeof (value) === "number") {
  console.log (value.toFixed (2));
}