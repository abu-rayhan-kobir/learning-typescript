

const data = new Set <string> ();
data.add ("Abu Rayhan Kobir");
data.add ("Md. Rajib Islam");
data.add ("Md. Samir Hossain");

console.log (data);

const numbers = new Set <number> ();
numbers.add (10);
numbers.add (20);
numbers.add (30);
numbers.add (40);

console.log (numbers);

const products = new Map <string, number> ();
products.set ("mouse", 1);
products.set ("keyboard", 2);
products.set ("speaker", 3);

console.log (products);

const orders = new Map <string, number> ();

function addOrder (juice: string): void {
  const quantity = (orders.get (juice) ?? 0) + 1;
  orders.set (juice, quantity);
  return;
}

addOrder ("lemon");
addOrder ("lemon");
addOrder ("lemon");
addOrder ("mango");
addOrder ("banana");


console.log (orders);
