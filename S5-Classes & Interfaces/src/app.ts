class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  };


  // this:Department tells TS that the 'this' will always refer to the Department class
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

// the constructor argument will be gathered from the new instance
const accounting = new Department('45','Accounting');

accounting.addEmployee('Godzilla');
accounting.addEmployee('King Kong');

// accounting.employees[2] = 'Mothra';

accounting.describe();
accounting.name = 'Stone Cold Steve Austin'
accounting.printEmployeeInfo();
