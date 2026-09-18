

const fruits: string [] = ["mango", "banana", "orange", "cherry"];
const numbers: number [] = [20, 30, 40, 50];

function getFirstItem <T> (items: T []): T {
  return items [0];
}

console.log (getFirstItem (fruits));
console.log (getFirstItem (numbers));


// Without generic

type TUser = {
  id: number;
  name: string;
  email: string;
}

type TProduct = {
  id: number;
  name: string;
  price: number;
}

type TStatus = "pendint" | "shipped" | "delivered";

type TOrder = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: TStatus;
}

async function getUsers (): Promise <TUser []> {
  const response = await fetch ("/api/users");
  return await response.json ();
}
const users: TUser []= await getUsers ();

async function getProducts (): Promise <TProduct []> {
  const response = await fetch ("/api/products");
  return await response.json ();
}
const products: TProduct [] = await getProducts ();

async function getOrders (): Promise <TOrder []> {
  const response = await fetch ("/api/orders");
  return await response.json ();
}
const orders: TOrder [] = await getOrders ();

async function getData <T> (apiEndpoint: string): Promise <T> {
  const response = await fetch (apiEndpoint);
  return await response.json ();
}

const allUsers: TUser [] = await getData <TUser []> ("/api/users");

const allProducs: TProduct [] = await getData <TProduct []> ("/api/products");

const allOrders: TOrder [] = await getData <TOrder []> ("/api/orders");




