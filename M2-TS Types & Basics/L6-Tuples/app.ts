const myGuy = { 
  name: 'Faissal',
  age: 28,
  hobbies: ['Sports', 'hanging']
};

let favoriteActivities: string[];
favoriteActivities = ['Apex']

console.log(myGuy.name);

for(const hobby of myGuy.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()); // ERROR gives an error due to individual hobbies having a string data type.
}
