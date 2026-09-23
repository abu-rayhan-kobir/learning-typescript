type TUser = {
  id: number;
  name: string;
  email: string;
  age: number;
  password: string;
};

// For private rendering
const user1: TUser = {
  id: 101,
  name: "Abu Rayhan Kobir",
  email: "aburayhankobir013@gmail.com",
  age: 21,
  password: "examplePassword",
};
console.log (user1);

// For public rendering
type TPublicUser = Pick <TUser, "name" | "email">;
const publicUser: TPublicUser = {
  name: "Abu Rayhan Kobir",
  email: "aburayhankobir013@gmail.com",
};
/* 
Internally typescript looks it as:
type TPublicUser = {
  name: string;
  email: string;
};
*/
console.log(publicUser);



