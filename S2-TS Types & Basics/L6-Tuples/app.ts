const myGuy: { 
  name: string; 
  age: number; 
  hobbies: string[]; 
  role: [number, string] 
} = { 
  name: 'Faissal',
  age: 28,
  hobbies: ['Sports', 'hanging'],
  role: [3, 'athlete']
};

myGuy.role.push('teacher');
// myGuy.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Apex']

console.log(myGuy.name);
console.log(myGuy.role);

for(const hobby of myGuy.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()); // ERROR gives an error due to individual hobbies having a string data type.
}
