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

// Function overloads
function add(a:string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
  // Type guard
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add('Yoda', 'Luke');
result.split(' ');

const fetchedUserData = {
  id: 'u1',
  name: 'Yoda',
  job: { title: 'Jedi Master', description: 'The best Jedi Master' }
};

// Optional Chaining
console.log(fetchedUserData?.job?.title);

// Nullish Coalescing
const userInput = null;
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);


// // Union type using the two custom object types
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log('Name: ' + emp.name);
//   if('privileges' in emp) {
//     console.log('Privileges: ' + emp.privileges);
//   }
//   if('startDate' in emp) {
//     console.log('Privilegs: ' + emp.startDate);
//   }
// }

// printEmployeeInformation(newEmployee);

// class Car {
//   drive() {
//     console.log('Driving monster car...');
//   }
// }

// class Truck {
//   drive() {
//     console.log('Driving monster truck...');
//   }

//   loadCargo(amount: number) {
//     console.log('Loading monster cargo...' + amount)
//   }
// }

// type Vehicle = Car | Truck;

// const vehicle1 = new Car();
// const vehicle2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   // Type guard
//   // Can NOT be used with interfaces because interfaces are not compiled to JS
//   if(vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// useVehicle(vehicle1);
// useVehicle(vehicle2);

// // Discriminated unions, works well with object types
// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }

// interface Horse {
//   type: 'horse';
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   // Discriminated union is the animal.type property. It is a common property in all interfaces
//   switch(animal.type) {
//     case 'bird': 
//       speed = animal.flyingSpeed;
//       break;
//     case 'horse':
//       speed = animal.runningSpeed  
//   }
//   console.log('Moving at speed: ' + speed);
// }

// moveAnimal({type: 'horse', runningSpeed: 400});

// // Type casting version 1 
// const paragraphVersion1 = <HTMLInputElement> document.getElementById('message-output')!;
// paragraphVersion1.value = 'Hi there!';

// // Type casting version 2
// // Preferred way and best for React apps
// // the bang operator ! tells TS that the element will never be null
// const paragraphVersion2 = document.getElementById('message-output')! as HTMLInputElement;
// // let paragraphValue = (paragraph as HTMLInputElement).value;
// paragraphVersion2.value = 'Hi there!';

// // In situations where you are not sure if the element exists aka null
// const paragraphVersion3 = document.getElementById('message-output');
// // Check if the element exists first before using it
// if (paragraphVersion3) {
//   (paragraphVersion3 as HTMLInputElement).value = 'Hi there!';
// }

// // Index Types
// interface ErrorContainer {
//   // { email: 'Not a valid email', username: 'Must start with a character' }
//   // shows that the key is a string and the value is a string regardless of whether we know what the key is  
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: 'Not a valid email',
//   username: 'Must start with a character'
// };