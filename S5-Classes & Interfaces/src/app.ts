class Department {
  name: string;

  constructor(n:string) {
    this.name = n;
  };
}

// the constructor argument will be gathered from the new instance
const accounting = new Department('Accounting');
console.log(accounting);