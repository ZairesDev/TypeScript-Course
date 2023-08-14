// custom types aliases can be used to store the specified types that are need. 
type Combinable = number | string;
type ConversionDescriptor = 'as-text' | 'as-number';


function combine(input1: Combinable, input2: Combinable, resultType: ConversionDescriptor) {
  // this type of run time type check may not always be needed with union types.
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
    result = +input1 + +input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result;
  // if (resultType === 'as-number'){
  //   // +result, with the plus right behind the result will convert the result to a number. same as parseFloat(result);.
  //   return +result
  // } else {
  //   return result.toString();
  // }
}

const combineAges = combine(30,26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30','28', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);