{
  // Union

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "AB-";
  };

  const User1: User = {
    name: "Minhaz",
    email: "min@gmail.com",
    gender: "male",
    bloodGroup: "O+",
  };
}
