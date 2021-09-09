const user = [
  {
    email: "supriadi@gmail.com",
    name: "Supriadi",
    password: "1234567",
  },
  {
    email: "supardi@gmail.com",
    name: "Supardi",
    password: "1234567",
  },
  {
    email: "suherman@gmail.com",
    name: "Suherman",
    password: "1234567",
  },
];

console.log(user.find((data) => data.name === "Supriadi"));

export default user;
