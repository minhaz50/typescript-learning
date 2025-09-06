{
  // Learning function

  // Normal function
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  add(2, 2);

  // Arrow function
  const arrowFunc = (num1: number, num2: number): number => num1 + num2;

  const customer = {
    name: "Minhaz",
    balance: 0,
    addBalance(balance: number): string {
      return `My new balance is ${this.balance + balance}`;
    },
  };

  // call back function
  const arr: number[] = [1, 34, 5];

  const newArray: number[] = arr.map((ele: number): number => ele * ele);
}
