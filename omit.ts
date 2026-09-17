type User = {
  id: number;
  name: string;
  email: string;
}

const users: User [] = [];

let lastId: number = 0;

function addUser (user: Omit <User, "id">): User {
  const newUser: User = {
    ...user,
    id: ++lastId,
  }
  users.push (newUser);
  return newUser;
}

addUser ({name: "Abu Rayhan Kobir", email: "aburayhankobir013@gmail.com",});
addUser ({name: "Md. Rajib Islam", email: "rajibislam013@gmail.com",});
addUser ({name: "Md. Samir Hossain", email: "samirhossin013@gmail.com",});

console.log (users);
