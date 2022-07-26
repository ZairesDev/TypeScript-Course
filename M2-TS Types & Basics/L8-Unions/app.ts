function combine(input1: number | string, input2: number | string) {
  // this type of run time type check may not always be needed with union types.
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
    return result;
}

const combineAges = combine(30,26);
console.log(combineAges);

const combineNames = combine('Max', 'Anna');
console.log(combineNames);