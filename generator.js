function generateRandomFact(){
    let randomFacts = [`I'm 5'11"`,`Tuskegee Airman Grandpa`, `I was the best speller in my middle school`, ' I was a martial artist 15+ years ago',` I can fly an airplane`, `been to Nepal
    `, `billingual`, ` I used to be a gymnast`,` I swim`];
  
    let randomIndex =Math.floor((Math.random() * randomFacts.length));
    console.log(randomFacts[randomIndex]);   
}
function lookingForSolutions(){
    console.log("rightAnswer");
}
module.exports={generateRandomFact, lookingForSolutions};