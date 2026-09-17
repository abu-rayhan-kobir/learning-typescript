/*

They "any" type is the most flexible type in typescript. It essentially tells the compiler to skip type checking for a particular variable. While this can be useful in certain situations, it should be used sparighly as it bypasses TypeScript's type safety features.

*/
// -----------------------------------------------------------
let isActive: any = true;
console.log (isActive, typeof (isActive)); // typeof -> "boolearn"
isActive = "Abu Rayhan Kobir";
console.log (isActive, typeof (isActive)); // typefo -> "string"
// ------------------------------------------------------------

