
// Prompt Sync =========================================================

const prompt = require('prompt-sync')({ sigint: true });

// Multiline Bug Fix ===================================================

const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

//Random fish generator function ======================================

//Fish adjective 1
const adjOne = ["giant", "lazy", "snapping", "hairy", "iridescent", "sexy", "ornery", "spiny", "venomous", "classic"];

//Fish adjective 2
const adjTwo = ["squishy", "chunky", "sneaky", "suspicious", "sensitive", "greedy", "rabid", "angry", "stupid", "yummy"];

//Fish Type
const fish = ["trout", "carp", "catfish", "loach", "bass", "tilapia", "salmon", "arowana", "shark", "guppy"];

//Function
function generateRandomFish(adjOne, adjTwo, fish) {

    //Empty first adjective   
    let firstAdj = [];

    //Empty first adjective
    let secndAdjs = [];

    //Empty fish type
    let fishType = [];

    //Random weight
    const weight = (Math.floor((Math.random() * 10)) + 1);

    //Randon value and change to 2 decimal places
    const valueRnd = Math.round(Math.random() * 10);
    const value = valueRnd.toFixed(2);

    //For loop for arrays
    for (i = 0; i < 1; i++) {

        //Random generated first adjective
        firstAdj = adjOne[Math.floor((Math.random() * 9)) + 1];

        //Random generated second adjective
        secndAdjs = adjTwo[Math.floor((Math.random() * 9)) + 1];
        fishType = fish[Math.floor((Math.random() * 9)) + 1];
    }

    const fishObject = {
        fish: firstAdj + " " + secndAdjs + " " + fishType,
        weight: weight + "lbs",
        value: "$" + value
    };

    //Return random fish object
    return fishObject;

}

//Ramdom fish holder
let newFish = generateRandomFish(adjOne, adjTwo, fish);

