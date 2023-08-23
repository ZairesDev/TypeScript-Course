interface Greetable {
  firstName: string;
  
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

let player1: Greetable;

player1 = new Player('Obiwan');

player1.greet('Hi There - I am');
console.log(player1)