// real world example

type Role = "admin" | "founder" | "collaborator";

type RolePermission = Record <Role, string []>;

const permission: RolePermission = {
  admin: [
    "manage-users",
    "manage-startups",
    "manage_transsctions",
  ],
  founder: [
    "create-startup",
    "create-opportunity",
  ],
  collaborator: [
    "broswer-opportunities",
    "apply-opportunity",
  ],
}

permission.admin.forEach((control) => console.log (control));

permission.founder.forEach ((control) => console.log (control));

permission.collaborator.forEach ((control) => console.log (control));


type StatusCode = 200 | 201 | 400 | 401 | 404 | 500;

const statusMessages: Record <StatusCode, string> = {
  200: "Success",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not Found",
  500: "Internal Server Error",
};

console.log (statusMessages[200]);
console.log (statusMessages[401]);
console.log (statusMessages[400]);
console.log (statusMessages[500]);