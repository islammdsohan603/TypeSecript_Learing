// String Literal Type + Union Type

interface User {
  id: number;
  name: string;
  age: number;
  role: 'MERN Stack Devloper';
  company?: string;
}

// User 1
const user1: User = {
  id: 21,
  name: 'sohan',
  age: 20,
  role: 'MERN Stack Devloper',
};

// User 2
// Spread Operator
const user2: User = {
  ...user1,
  id: 12,
};

console.log(user2);

// Rest Operator
const user = {
  name: 'MD.SOHAN',
  age: 20,
};

// Spread Operator
const updateUser = {
  ...user,
  age: 22,
};

console.log(updateUser);

// Array
const arr: number[] = [10, 20, 30];

console.log(arr);

// Rest Parameter
const sum = (...numbers: number[]): number => {
  const result = numbers.reduce((total, number) => total + number, 0);

  return result;
};

console.log(sum(10, 20, 30, 40));
