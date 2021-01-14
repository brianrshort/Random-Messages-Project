//A simple, silly fortune-telling app.

//A function to select a random greeting
function greeting() {
    const arr = ["Welcome, traveller!", "Greetings, querant!", "Sup chump."];
    const randNum = Math.floor(Math.random() * arr.length); 
    return arr[randNum];
}

//A function to select a random fortune
function tellFortune() {
    const arr = ["Beware the ides of January!", "Behold, a rider on a pale horse, and its name is inconvenient snowfall!", "A new life is coming soon."];
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

//A function to select a random outro
function outro() {
    const arr = ["Prepare yourself.","Begone from my sight!","Ready, Freddie?"];
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum];
}

//A function to join the three randomly selected phrases together
function join(phraseOne, phraseTwo, phraseThree) {
    return `${phraseOne} ${phraseTwo} ${phraseThree}`;
}
