function sayHello(name){
    console.log(`Hello ${name}, welcome to my application`);
}

function sayGoodbye(name){
    console.log(`Goodbye ${name}, thanks for using my app`);
    privateFunction();
}

function returnMyName(name){
    return name;
}
function privateFunction(){
    console.log('this is private');
}

module.exports = {sayHello, sayGoodbye, returnMyName};