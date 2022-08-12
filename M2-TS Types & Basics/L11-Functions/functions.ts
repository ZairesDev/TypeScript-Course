function add(n1: number, n2: number) {
  return n1 + n2
}

// has no return statement, or return anything. Therefore void.
function printResult(num: number): void {
  console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void ) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(6,12))

let combineValues: (a: number, b: number) => number;

combineValues = add;
// this will not satisfy the type definition because printResult will only take one argument and returns void
// combineValues = printResult;

console.log(combineValues(8,8));

// let someValue: undefined;

addAndHandle(10, 20, (result) => {
  console.log(result);
})