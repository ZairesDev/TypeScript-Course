// Code goes here!
const userName = 'Faissa';
let age = 25;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}

if (age > 20) {
  let isOld = true;
}
// will throw an error because isOld is block scoped and the console.log is outside the block
console.log(isOld);