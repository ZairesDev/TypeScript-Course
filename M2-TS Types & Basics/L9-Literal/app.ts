function combine(input1: number | string, input2: number | string, resultType: string) {
  // this type of run time type check may not always be needed with union types.
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resultType === 'as-number'){
    // +result, with the plus right behind the result will convert the result to a number
    return +result
  }
  return result;
}

const combineAges = combine(30,26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30','28', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);