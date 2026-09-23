/* 
Exclude = Union-এর মধ্যে থেকে যেগুলো চাই না, সেগুলো বাদ দাও।
*/

type Role = "admin" | "collaborator" | "founder";

type NormalRole = Exclude <Role, "admin">;
/* 
type Role = "collaborator" | "founder";
*/

type Status = "pending" | "approved" | "rejected";

type ActiveStatus = Exclude <Status, "rejected">;

/* 

type ActiveStatus = "pendint" | "approved";

*/

type TRole = "admin" | "user" | "moderator" | "guest";

type TPublicRole = Exclude <TRole, "admin" | "moderator">;

/* 

type TPublicRole = {
  user: string;
  moderator: string;
};

*/
