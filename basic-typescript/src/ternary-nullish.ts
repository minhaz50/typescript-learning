{
  // ternary || nullish || optional chaining
  const age: number = 25;

  // normal way
  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not Adult");
  }

  // using ternary operator
  const isAdult = age >= 18 ? "adult" : "Not Adult";
  console.log({ isAdult });

  //nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  console.log({ result1 });

  // option chaining

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Minhaz",
    address: {
      city: "Mymensingh",
      road: "college road",
      presentAddress: "bhaluka twon",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No permanentAddress found";
  console.log({ permanentAddress });
}
