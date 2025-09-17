{
  // generic type

  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [2,4,5,6] --> this is use normal way
  const rollNumbers: GenericArray<number> = [2, 5, 3, 6]; // this is using generic

  // const mentors: string[] =["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  // const boolean: boolean[] = [true, false, true];
  const boolean: GenericArray<boolean> = [true, false, true];

  // we can also create array of Object using generic
  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Minhaz",
      age: 28,
    },
    {
      name: "Israt",
      age: 21,
    },
  ];

  // Generic with tuple
  type GenericTuple<X, Y> = [X, Y];

  const person: GenericTuple<string, string> = ["Mr.X", "Mr.Y"];

  const userId: GenericTuple<number, { name: string; age: number }> = [
    235,
    { name: "John", age: 32 },
  ];

  // Generic with Interface

  interface Developer<T, B = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: B;
  }

  type boatWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<boatWatch> = {
    name: "Minhaz",
    computer: {
      brand: "Dell",
      model: "Inspiron 15",
      releaseYear: 2017,
    },
    smartWatch: {
      brand: "boat",
      model: "xc-2000",
      display: "OLED",
    },
  };

  interface appleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YahmahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<appleWatch, YahmahaBike> = {
    name: "RichDev",
    computer: {
      brand: "Apple",
      model: "Macbook pro",
      releaseYear: 2028,
    },
    smartWatch: {
      brand: "boat",
      model: "xc-2000",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "R15M",
      engineCapacity: "250cc",
    },
  };
}
