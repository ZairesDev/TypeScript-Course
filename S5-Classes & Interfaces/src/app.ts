class Department {
  name: string;

  constructor(n:string) {
    this.name = n;
  };

  describe() {
    console.log('Department: ' + this.name)
  }
}

// the constructor argument will be gathered from the new instance
const accounting = new Department('Accounting');
accounting.describe();