type User = {
  id: number;
  name: string;
}

const user1: User = {
  id: 101,
  name: "Abu Rayhan Kobir",
};

const user2: User = {
  id: 202,
  name: "Md. Rajib Islam",
};

interface Student {
  name: string;
  roll: number;
  college: string;
  isPassed: boolean;
}

const student: Student = {
  name: "Abu Rayhan Kobir",
  roll: 14,
  college: "Dinajpur Government College, Dinajpur",
  isPassed: true,
}

console.log (student);
