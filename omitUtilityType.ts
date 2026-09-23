/*

Omit হলো TypeScript-এর একটি built-in Utility Type, যেটা কোনো existing type থেকে নির্দিষ্ট property বাদ দিয়ে নতুন type তৈরি করে।
Syntax:

Omit<Type, Keys>
*/

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
};

type withOutAge = Omit<User, "age">;
/* 
Internally typescript withOutAge type looks like as:

type withOutAge = {
  id: number;
  name: string;
  email: string;
};

*/

type PublicUser = Omit<User, "id" | "age" | "password">;

/* 
PublicUser type showed by typescript as:

type PublicUser = {
  name: string;
  email: string;
};

*/

type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
};

type TPublicUser = Omit <TUser, "id" | "password" | "createdAt" | "updatedAt">;

const publicUser: TPublicUser = {
  name: "Abu Rayhan Kobir",
  email: "aburayhankobir013@gmail.com",
};

console.log (publicUser);

// Omit + Partial

type TPerson = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type TUpdatePerson = Partial <Omit <TPerson, "id">>;

/* 
type TUpdatePerson = {
  name?: string;
  email?: string;
  age?: number;
};
*/

const person: TUpdatePerson = {
  name: "Abu Rayhan Kobir",
  email: "aburayhankobir013@gmail.com",
  age: 21,
}

const person1: TUpdatePerson = {
  ...person,
  email: "rajibislam013@gmail.com",
};
console.log (person1);
const person2: TUpdatePerson = {
  ...person,
  name: "Md. Rajib Islam",
};
console.log (person2);
const person3: TUpdatePerson = {
  ...person,
  age: 20,
};
console.log (person3);
