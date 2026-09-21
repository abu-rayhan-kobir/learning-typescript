class Person {
  private readonly name: string;
  public constructor (name: string) {
    this.name = name;
  }
  public getName (): string {
    return this.name;
  }
}

const person = new Person ("Abu Rayhan Kobir");
console.log (person);