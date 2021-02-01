let calc = require('./calc');
let greetings = require('./greetings');
let {generateRandomFact, lookingForSolutions} = require('./generator');

let a = 99;
let b = 27;

greetings.sayHello("terra");
calc.add(a,b);
calc.subtract(a,b);

let myName =greetings.returnMyName("terra");
console.log(myName);

generateRandomFact();
greetings.sayGoodbye("terra");