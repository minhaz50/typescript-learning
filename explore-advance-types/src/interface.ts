{
  // interface

  interface User1 {
    name: string;
    age: number;
  }

  const user1: User1 = {
    name: "Minhaz",
    age: 21,
  };

  // interface we use for non primitive data.
  // type alias we use for primitive data.

  // js --> Object, array --> Object, function --> Object.
  // In javascript we know array one type of Object.
  // In javascript we know function also one type of Object.

  // array using type alias
  type Roll1 = number[];

  const rollNumber: Roll1 = [1, 2, 3];

  // array using interface
  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber2: Roll2 = [1, 2, 3];
  // index -->                0, 1, 2 ---> number type
}
