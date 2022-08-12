let userInput: unknown;
let userName: string;


userInput = 5; 
userInput = 'Faissal'
// this will throw an error since we can't assign a fixed type to an unknown type
// userName = userInput;
if (typeof userInput === 'string') {
  userName = userInput;
}