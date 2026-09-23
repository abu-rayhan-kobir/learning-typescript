type TUser = {
  id: number;
  name: string;
  email: string;
  age: number;
}; // All properties are required

type TUpdateUser = Partial <TUser>;

const updatedUser: TUpdateUser = {
  name: "abu rayhan kobir",
  email: "aburayhankobir013@gmail.com",
};

console.log (updatedUser);