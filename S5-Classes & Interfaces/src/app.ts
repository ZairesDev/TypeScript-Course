// type AddFunction = (a: number, b: number) => number;
interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly firstName?: string;
  outputFirstName?: string;
}

interface Greetable extends Named {  
  greet(phrase: string): void;
}

class Player implements Greetable {
  firstName?: string;
  age = 888;



  constructor(n?: string) {
    if(n) {
      this.firstName = n;
    }
  }

  greet(phrase: string) {
    if(this.firstName) {
      console.log(phrase + ' ' + this.firstName)
    } else {
      console.log('Hi')
    }
  }
}

// setting it to type Greetable means that it must have the same properties as the Greetable interface
let player1: Greetable;

player1 = new Player();

player1.greet('Hi There - I am');
console.log(player1)