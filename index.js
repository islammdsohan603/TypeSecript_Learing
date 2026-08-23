"use strict";
// String Literal Type + Union Type
Object.defineProperty(exports, "__esModule", { value: true });
// User 1
const user1 = {
    id: 21,
    name: 'sohan',
    age: 20,
    role: 'MERN Stack Devloper',
};
// User 2
// Spread Operator
const user2 = {
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
const arr = [10, 20, 30];
console.log(arr);
// Rest Parameter
const sum = (...numbers) => {
    const result = numbers.reduce((total, number) => total + number, 0);
    return result;
};
console.log(sum(10, 20, 30, 40));
//# sourceMappingURL=index.js.map