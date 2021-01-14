//A simple, silly fortune-telling app.

//A function to select a random greeting
function greeting() {
    const arr = ["Welcome, traveller!", "Greetings, querant!", "Sup chump."];
    const randNum = Math.floor(Math.random() * arr.length); 
    return arr[randNum];
}

