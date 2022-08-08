function add(n1: number, n2: number) {
  return n1 + n2
}

// has no return statement, or return anything. Therefore void.
// 
function printResult(num: number): void {
  console.log('Result: ' + num)
}

// undefined is also a type in TS, however you will need a return statement that is empty
// function printResult(num: number): undefined {
//   console.log('Result: ' + num)
//   return;
// }

printResult(add(6,12))

let someValue: undefined;