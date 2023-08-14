// const myGuy: { 
//   name: string; 
//   age: number; 
//   hobbies: string[]; 
//   role: [number, string] 
// } = { 
//   name: 'Faissal',
//   age: 28,
//   hobbies: ['Sports', 'hanging'],
//   role: [3, 'athlete']
// };

// myGuy.role.push('teacher');
// myGuy.role[1] = 10;


// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN, READ_ONLY, AUTHOR};

const myGuy = { 
  name: 'Faissal',
  age: 28,
  hobbies: ['Sports', 'hanging'],
  role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ['Apex']

if(myGuy.role === Role.ADMIN) {
  console.log('is Admin')
}
// console.log(myGuy.name);
// console.log(myGuy.role);

// for(const hobby of myGuy.hobbies) {
//   console.log(hobby.toLocaleUpperCase());
//   // console.log(hobby.map()); // ERROR gives an error due to individual hobbies having a string data type.
// }
