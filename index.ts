type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [];

let lastId: number = 0;
function addUser(name: string, email: string): User {
  const user: User = {
    id: ++lastId,
    name,
    email,
  };

  users.push(user);
  return user;
}

console.log(addUser("Alice", "sohan@gmail.com"));
console.log(addUser("Naymar", "sohan123@gmail.com"));
