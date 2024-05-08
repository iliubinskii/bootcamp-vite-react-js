export const db = {
  findUser: (username) => {
    return Promise.resolve(
      users.find((candidate) => candidate.username === username)
    );
  },
};

const users = [
  {
    username: "admin",
    password: "admin123",
    name: "Admin",
    title: "Sir",
    email: "admin@gmail.com",
  },
  {
    title: "Mr",
    username: "bob",
    password: "bob123",
    name: "Bob",
    email: "bob@gmail.com",
  },
];
