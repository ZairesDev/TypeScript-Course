class Department {
  name: string;

  constructor(n:string) {
    this.name = n;
  };


  // this:Department tells TS that the 'this' will always refer to the Department class
  describe(this: Department) {
    console.log('Department: ' + this.name)
  }
}

// the constructor argument will be gathered from the new instance
const accounting = new Department('Accounting');
accounting.describe();

const accountingCopy = { name: 'happy', describe: accounting.describe };
accountingCopy.describe();