class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins
  }
}

class AccoutingDepartment extends Department {
  constructor(id:string, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Godzilla') {
      return;
    }
    this.employees.push(name)
  }

  addReport(text: string) {
    this.reports.push(text)
  }

  printReports() {
    console.log(this.reports)
  }
}

// the constructor argument will be gathered from the new instance
const it = new ITDepartment('45', ['Donkey']);

it.addEmployee('Godzilla');
it.addEmployee('King Kong');

// it.employees[2] = 'Mothra';

it.describe();
it.name = 'Stone Cold Steve Austin'
it.printEmployeeInfo();
console.log(it);

const accounting = new AccoutingDepartment('46', []);

accounting.addReport('What a report');
accounting.addEmployee('R2D2')
accounting.printReports();
console.log(accounting);
