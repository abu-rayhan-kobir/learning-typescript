
enum Role {
  Admin = "admin",
  Founder = "founder",
  Collaborator = "collaborator",
};

const role1: Role = Role.Admin;
const role2: Role = Role.Founder;
const role3: Role = Role.Collaborator;

console.log (role1, role2, role3);

enum Status {
  draft, // 0
  private, // 1
  public, // 2
};

type Article = {
  id: number;
  title: string;
  status: Status;
}

const article1: Article = {
  id: 102,
  title: "programming with typescript",
  status: Status.private,
};

const article2: Article = {
  id: 103,
  title: "programming with c and c++",
  status: Status.public,
};

console.log (article1, article2);