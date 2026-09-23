/*
Required utility type
"Required" changes all properties in an object to be required.
*/

type TPerson = {
  id: number;
  name: string;
  email?: string;
  address?: string;
  nationality: string;
};

type TUpdatePerson = Required <TPerson>;

/* 
Now, all properties of TPerson is required.

It's looking like as:
type TUpdatePerson = {
  id: number;
  name: string;
  email: string;
  address: string;
  nationality: string;
};
*/