type TUser = {
  id?: number;
  name: string;
  email: string;
};

const users: TUser [] = [];

let lastId = 0;
function createUser (user: TUser): TUser {
  const newUser: TUser = {
    id: ++lastId,
    ...user,
  }
  users.push (newUser);
  return newUser;
}

createUser ({name: "Abu Rayhan Kobir", email: "aburayhankobir013@gmail.com",});
createUser ({name: "Md. Rajib Islam", email: "rajibislam013@gmail.com"});
createUser ({name: "Md. Samir Hossain", email: "samirhossain013@gmail.com"});

console.log (users);