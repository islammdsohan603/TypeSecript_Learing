// String Literal Type + Union Type।

type User = {
  age: number;
  id: number;
  name: string;
  role: 'MERN Stack Devloper';
  company?: string;
};

const user1: User = {
  id: 21,
  name: 'sohan',
  age: 20,
  role: 'MERN Stack Devloper',
};

const user2: User = {
  ...user1,
  id: 12,
};

console.log(user2);
