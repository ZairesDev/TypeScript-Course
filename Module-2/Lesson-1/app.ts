function add(n1: number, n2: number) {
  //* This would be the vanilla JS way of preventing an incorrect type, however this will throw the error during production. 
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);
