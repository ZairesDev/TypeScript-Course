const add = (...numbers: number[]) => {
  return numbers.reduce((currentResult, currentValue) => {
      return currentResult + currentValue;
  }, 0);
};

const addNumbers = add(5,3,2,4,3.2);
console.log(addNumbers);