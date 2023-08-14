function aedd(n1: number, n2: number, n3: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input!');
  // }
  const result = n1 + n2 + n3;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 5;
const number2 = 2.8;
let number3: number;
number3 = 27;
const printResult = true;
let resultPhrase = 'Result is: ';

aedd(number1, number2, number3, printResult, resultPhrase);
