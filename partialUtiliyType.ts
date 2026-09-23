// Partial changes all properties in an object to be optional.

type TUser = {
  id: number;
  name: string;
  email: string;
  age: number;
}; // All proptery are required here

// Let's use Partial utility type to convert all properties of an existing object to optional

type TUpdateUser = Partial <TUser>;

/*

TUpdateUser looking like as:
type TUpdateUser = {
  id?: number;
  name?: string;
  email?: string;
  age?: number
}

*/

// Here TUpdateUser makes TUser type all required properties to optional properties