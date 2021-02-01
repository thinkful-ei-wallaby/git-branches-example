let calc = require('./calc');
let greetings = require('./greetings');

let a = 99;
let b = 27;

greetings.sayHello("terra");
calc.add(a,b);
calc.subtract(a,b);
greetings.sayGoodbye("terra");
let myName =greetings.returnMyName("terra");
console.log(myName);
