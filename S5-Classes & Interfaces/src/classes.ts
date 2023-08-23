abstract class Department {
  static fiscalYear = 2023
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  };


  // this:Department tells TS that the 'this' will always refer to the Department class
  abstract describe(this: Department) : void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name }
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }

  describe() {
    console.log('IT Department - ID: ' + this.id)
  }
}

class AccoutingDepartment extends Department {
  private lastReport: string;
  private static instance: AccoutingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('No report found');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value')
    }
    this.addReport(value);
  }

  private constructor(id:string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if(AccoutingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccoutingDepartment('47', []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Departmnet - ID: ' + this.id)
  }
  

  addEmployee(name: string) {
    if (name === 'Godzilla') {
      return;
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Sonic');
console.log(employee1, Department.fiscalYear)

// the constructor argument will be gathered from the new instance
const it = new ITDepartment('45', ['Donkey']);

it.addEmployee('Godzilla');
it.addEmployee('King Kong');

// it.employees[2] = 'Mothra';

it.describe();
it.name = 'Stone Cold Steve Austin'
it.printEmployeeInfo();

console.log(it);

const accounting = AccoutingDepartment.getInstance();
const accounting2 = AccoutingDepartment.getInstance();

console.log(accounting, accounting2)

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('What a report');
console.log(accounting.mostRecentReport)

accounting.addEmployee('R2D2')
accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInfo();
