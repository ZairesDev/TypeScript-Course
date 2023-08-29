// Code goes here!
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// Intersection types
type ElevatedEmployee = Admin & Employee;

const newEmployee: ElevatedEmployee = {
  name: 'Yoda',
  privileges: ['create-jedis'],
  startDate: new Date()
};

// Union types
type Combinable = string | number;
type Numeric = number | boolean;

// Intersection types
type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

// Union type using the two custom object types
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if('privileges' in emp) {
    console.log('Privileges: ' + emp.privileges);
  }
  if('startDate' in emp) {
    console.log('Privilegs: ' + emp.startDate);
  }
}

printEmployeeInformation(newEmployee);

class Car {
  drive() {
    console.log('Driving monster car...');
  }
}

class Truck {
  drive() {
    console.log('Driving monster truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading monster cargo...' + amount)
  }
}

type Vehicle = Car | Truck;

const vehicle1 = new Car();
const vehicle2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();

  // Type guard
  // Can NOT be used with interfaces because interfaces are not compiled to JS
  if(vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(vehicle1);
useVehicle(vehicle2);

// Discriminated unions, works well with object types
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  // Discriminated union is the animal.type property. It is a common property in all interfaces
  switch(animal.type) {
    case 'bird': 
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed  
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'horse', runningSpeed: 400});