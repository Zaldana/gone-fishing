
// Prompt-Sync with exit ================================================

const prompt = require('prompt-sync')({ sigint: true });

// Multiline Prompt-Sync Bug Fix ========================================

const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

// Random fish generator function //////////////////////////////////////

// Fish adjective 1
const adjOne = ["giant", "lazy", "snapping", "hairy", "iridescent",
    "sexy", "ornery", "spiny", "venomous", "classic"];

// Fish adjective 2
const adjTwo = ["squishy", "chunky", "sneaky", "suspicious",
    "sensitive", "greedy", "rabid", "angry", "stupid", "yummy"];

// Fish Type
const fish = ["trout", "carp", "catfish", "loach", "bass",
    "tilapia", "salmon", "arowana", "shark", "guppy"];

// Function ============================================================

function generateRandomFish(adjOne, adjTwo, fish) {

    // Empty first adjective   
    let firstAdj = [];

    // Empty second adjective
    let secndAdjs = [];

    // Empty fish type
    let fishType = [];

    // Random weight
    const weightRnd = Math.floor(Math.random() * 4);
    const weight = weightRnd.toFixed(2);

    // Randon value
    const value = Math.round(Math.random() * 10);

    //For loop for arrays
    for (i = 0; i < 1; i++) {

        // Random generated first adjective
        firstAdj = adjOne[Math.floor((Math.random() * 9)) + 1];

        // Random generated second adjective
        secndAdjs = adjTwo[Math.floor((Math.random() * 9)) + 1];

        //Random generated fish type
        fishType = fish[Math.floor((Math.random() * 9)) + 1];
    }

    // Fish Object
    const fishObject = {
        fish: firstAdj + " " + secndAdjs + " " + fishType,
        weight: weight,
        value: value
    };

    // Return random fish object
    return fishObject;

}
// Random fish generator function END //////////////////////////////

// Game Start /////////////////////////////////////////////////////

console.log("\n\
You've gone fishing! Try to maximize the value of your caught\n\
fish. You can fish for six hours (till 12:00pm) and can catch \n\
at most 10 lbs of fish.");
console.log("\n\
================================================================\n\
");

// Starting Score =======================================================

let timeHour = 6;
let timeMin = ":00";
let timeAmpm = 'am';
let timeCount = 0;
let fishAmount = 0;
let totalValue = 0;
let totalWeight = 0;

// Starting score prompt =================================================

let promptStart = multiLinePrompt("\n\
The time is " + timeHour + timeMin + timeAmpm +
    " So far you've caught: \n\
" + fishAmount + "lbs, " + "$" + totalValue + ".00 \n\
\n\
press [Enter] to begin fishing");

// Terminal clear
console.clear();

// Fishing While Loop Start///////////////////////////////////////////////

while (timeHour !== 12) {


    ////////////////////////////// GAME TOOLS ///////////////////////////////

    // Game clock ======================================================

    timeHour += 1;
    timeCount += 1;
    if (timeCount > 6) { timeAmpm = "pm"; }

    // Random fish holder =================================================

    let newFish = generateRandomFish(adjOne, adjTwo, fish);

    // Fish weight check ==================================================

    if (newFish.weight + totalWeight >= 10) {



    }

    ///////////////////////////////////////////////////////////////////////////

    // Fishing Start ======================================================

    if (newFish.weight + totalWeight <= 10) {

        let fishing = multiLinePrompt("\n\
You reeled in a " + newFish.fish + " weighing " + newFish.weight + "lbs\n\
and valued at $" + newFish.value + ".00!\n\
\n\
Your action: [c]atch or [r]elease ?)\n\
\n\
");

        // IF fishing statements ============================================

        if (fishing === "c") {

            // Terminal clear
            console.clear();

            //Score update
            fishAmount += 1;
            totalWeight += Number(newFish.weight);
            totalValue += newFish.value;
            console.log(totalWeight.toFixed(2) + "lbs");
            console.log("$" + totalValue + ".00");
            console.log("Total Fish: " + fishAmount);
            console.log("Current Time: " + timeHour + ":00" + timeAmpm);

        }

        if (fishing === "r") {

            // Terminal clear
            console.clear();
            // Add to fish quantity
            console.log(newFish.fish + " is to heavy, you have to let it go");
            console.log(totalWeight.toFixed(2) + "lbs");
            console.log("$" + totalValue + ".00");
            console.log("Total Fish: " + fishAmount);
            console.log("Current Time: " + timeHour + ":00" + timeAmpm);

        }
    }
}
//While loop end/////////////////////////////////////////////////////////////

//ENDGAME///////////////////////////////////////////////////////////////////
console.log("Times UP");