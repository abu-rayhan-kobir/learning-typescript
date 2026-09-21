

// const fruits: string [] = ["mango", "banana", "orange", "cherry"];
// const numbers: number [] = [20, 30, 40, 50];

// function getFirstItem <T> (items: T []): T {
//   return items [0];
// }

// console.log (getFirstItem (fruits));
// console.log (getFirstItem (numbers));


// // Without generic

// type TUser = {
//   id: number;
//   name: string;
//   email: string;
// }

// type TProduct = {
//   id: number;
//   name: string;
//   price: number;
// }

// type TStatus = "pendint" | "shipped" | "delivered";

// type TOrder = {
//   id: number;
//   userId: number;
//   total: number;
//   date: string;
//   status: TStatus;
// }

// async function getUsers (): Promise <TUser []> {
//   const response = await fetch ("/api/users");
//   return await response.json ();
// }
// const users: TUser []= await getUsers ();

// async function getProducts (): Promise <TProduct []> {
//   const response = await fetch ("/api/products");
//   return await response.json ();
// }
// const products: TProduct [] = await getProducts ();

// async function getOrders (): Promise <TOrder []> {
//   const response = await fetch ("/api/orders");
//   return await response.json ();
// }
// const orders: TOrder [] = await getOrders ();

// async function getData <T> (apiEndpoint: string): Promise <T> {
//   const response = await fetch (apiEndpoint);
//   return await response.json ();
// }

// const allUsers: TUser [] = await getData <TUser []> ("/api/users");

// const allProducs: TProduct [] = await getData <TProduct []> ("/api/products");

// const allOrders: TOrder [] = await getData <TOrder []> ("/api/orders");

function identityString (value: string): string {
  return value;
}

function identityNumber (value: number): number {
  return value;
}

function identityBoolean (value: boolean): boolean {
  return value;
}

function identity <Type> (value: Type): Type {
  return value;
}

console.log (identity <string> ("Abu Rayhan Kobir"));
console.log (identity <number> (100));
console.log (identity <boolean> (true));

// Generic with array
function getFirst <Type> (numbers: Type []): Type {
  return numbers[0];
}

console.log (getFirst <number> ([10, 20, 30]));
console.log (getFirst <string> (["Abu Rayhan Kobir", "Md. Rajib Islam"]));
console.log (getFirst <boolean> ([true, false, false, true]));

function pair <Type1, Type2> (first: Type1, second: Type2) {
  return {
    first,
    second,
  }
}

console.log (pair <string, number> ("Abu Rayhan Kobir", 14));
console.log (pair <string, string> ("Abu Rayhan Kobir", "aburayhankobir013@gmail.com"));


type TBox <Type1, Type2> = {
  username: Type1;
  email: Type2;
}

const box1: TBox <string, string> = {
  username: "Abu Rayhan Kobir",
  email: "aburayhankobir013@gmail.com",
};

console.log (box1);

interface ApiResponse <Type> {
  success: boolean;
  data: Type;
}

interface User {
  id: number;
  name: string;
}

const resposne: ApiResponse <User> = {
  success: true,
  data: {
    id: 101,
    name: "Abu Rayhan Kobir",
  }
};

console.log (resposne);






