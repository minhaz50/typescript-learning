{
  // Type alias
  type Student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const Student1: Student = {
    name: "Minhaz",
    age: 210,
    gender: "Male",
    address: "bhaluka",
  };
  const Student2: Student = {
    name: "Israt",
    age: 21,
    gender: "Female",
    address: "mymen",
  };

  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 + num2;
}
