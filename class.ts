class Account {
  constructor (public readonly id: number, public name: string, protected balance: number) {
    this.id = id;
    this.name = name;
    this.balance;
  }
}

const account1 = new Account (202, "Abu Rayhan Koibir", 200000);
console.log (account1);