interface Named {
  readonly firstName: string;
}

interface Greetable extends Named {  
  greet(phrase: string): void;
}

class Player implements Greetable {
  firstName: string;
  age = 888;



  constructor(n: string) {
    this.firstName = n;
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.firstName)
  }
}

// setting it to type Greetable means that it must have the same properties as the Greetable interface
let player1: Greetable;

player1 = new Player('Obiwan');

player1.greet('Hi There - I am');
console.log(player1)