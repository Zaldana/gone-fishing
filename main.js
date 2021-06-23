
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
const adjOne = ["Giant", "Lazy", "Snapping", "Hairy", "Iridescent",
    "Sexy", "Ornery", "Spiny", "Venomous", "Classic"];

// Fish adjective 2
const adjTwo = ["Squishy", "Chunky", "Sneaky", "Suspicious",
    "Sensitive", "Greedy", "Rabid", "Angry", "Stupid", "Yummy"];

// Fish Type
const fish = ["Trout", "Carp", "Catfish", "Loach", "Bass",
    "Tilapia", "Salmon", "Arowana", "Shark", "Leather Boot"];

// Function ============================================================

function generateRandomFish(adjOne, adjTwo, fish) {

    // Empty first adjective   
    let firstAdj = [];

    // Empty second adjective
    let secndAdjs = [];

    // Empty fish type
    let fishType = [];

    // Random weight
    const weightRnd = Math.fround(Math.random() * 5);
    const weight = weightRnd.toFixed(2);

    // Randon value
    const value = (Math.round(Math.random() * 10)) + 1;

    //For loop for arrays
    for (i = 0; i < 1; i++) {

        // Random generated [i] for first adjective
        firstAdj = adjOne[Math.floor((Math.random() * 9)) + 1];

        // Random generated [i] second adjective
        secndAdjs = adjTwo[Math.floor((Math.random() * 9)) + 1];

        //Random generated [i] for fish type
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

// Art ============================================================

console.log("====================================================================================");
console.log("░██████╗░░█████╗░███╗░░██╗███████╗  ███████╗██╗░██████╗██╗░░██╗██╗███╗░░██╗░██████╗░");
console.log("██╔════╝░██╔══██╗████╗░██║██╔════╝  ██╔════╝██║██╔════╝██║░░██║██║████╗░██║██╔════╝░");
console.log("██║░░██╗░██║░░██║██╔██╗██║█████╗░░  █████╗░░██║╚█████╗░███████║██║██╔██╗██║██║░░██╗░");
console.log("██║░░╚██╗██║░░██║██║╚████║██╔══╝░░  ██╔══╝░░██║░╚═══██╗██╔══██║██║██║╚████║██║░░╚██╗");
console.log("╚██████╔╝╚█████╔╝██║░╚███║███████╗  ██║░░░░░██║██████╔╝██║░░██║██║██║░╚███║╚██████╔╝");
console.log("░╚═════╝░░╚════╝░╚═╝░░╚══╝╚══════╝  ╚═╝░░░░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░");
console.log("====================================================================================");

// Game Instructions
console.log("\n\
You've gone fishing! Try to maximize the value of your caught fish. You can fish for\n\
six hours (untill 12:00pm) and can catch at most 10 lbs of fish.");
console.log("\n\
====================================================================================\n\
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
" + fishAmount + " fish, " + "and earned $" + totalValue + ".00 \n\
\n\
press [Enter] to begin fishing");

// Terminal clear
console.clear();

// Fishing While Loop Start///////////////////////////////////////////////

while (timeHour !== 12) {

    // Game Tools////////////////////////////////////////////////////////

    // Game clock ======================================================

    timeHour += 1;
    timeCount += 1;
    if (timeCount > 5) { timeAmpm = "pm"; }

    // Random fish holder =================================================

    let newFish = generateRandomFish(adjOne, adjTwo, fish);

    // Boot Check =========================================================

    if (newFish.fish.includes("Leather Boot")) { newFish.value = 0; }

    // Fish weight check ==================================================

    if (newFish.weight + totalWeight >= 10) {

        let tooHeavy = multiLinePrompt("\n\
You reeled in a " + newFish.fish + " weighing " + newFish.weight + "lbs\n\
and valued at $" + newFish.value + ".00\n\
\n\
Unfortunately the fish is too heavy to add to your bag and it got away\n\
\n\
Press [Enter] to cast again.");
    }

    ///////////////////////////////////////////////////////////////////////////

    // Fishing Start ======================================================

    else {

        let fishing = multiLinePrompt("\n\
You reeled in a " + newFish.fish + " weighing " + newFish.weight + "lbs\n\
and valued at $" + newFish.value + ".00!\n\
\n\
Would you like to: [c]atch or [r]elease ?)\n\
\n\
");

        // IF fishing statements ============================================

        if (fishing === "c") {

            // Terminal clear
            console.clear();

            //Art ===========================================================

            console.log("                                      ____        ");
            console.log("                                 /\\|    ~~\\     ");
            console.log("                                / '  |  ,-.`\\    ");
            console.log("                               |       | X | |    ");
            console.log("                         ______|________`-'  |X   ");
            console.log("                       /'          ~~~~~~~~~,     ");
            console.log("                      /'             ,_____,/_    ");
            console.log("                   ,/'        ___,'~~         ;   ");
            console.log("~~~~~~~~|~~~~~~~|---         /  X,~~~~~~~~~~~~,   ");
            console.log("        |       |           |  XX'____________'   ");
            console.log("        |       |          /' XXX|            ;   ");
            console.log("        |               --x|  XXX,~~~~~~~~~~~~,   ");
            console.log("        |       |         X|     '____________'   ");
            console.log("        |   o   |----~~~~\\__XX\\            |XX  ");
            console.log("        |       |           XXX`\\          /XXXX ");
            console.log("~~~~~~~~'~~~~~~~'                `\\xXXXXx/'\\XXX ");
            console.log("                                    /XXXXXX\      ");
            console.log("                                  / XXXXXXXXXX\   ");
            console.log("                                /XXXXXX/^\\XDCAU\\");
            console.log("                               ~~~~~~~~   ~~~~~~~ ");
            //Spacer
            console.log();
            console.log();
            //===============================================================

            // Score update
            fishAmount += 1;
            totalWeight += Number(newFish.weight);
            totalValue += newFish.value;

            // User stat update
            console.log("Your new total weight is now:  " + totalWeight.toFixed(2) + "lbs");
            console.log("You have made a total of:  $" + totalValue + ".00");
            console.log("You have cought:  " + fishAmount + " fish");
            console.log("The current time is:  " + timeHour + ":00" + timeAmpm);

            //Spacer
            console.log();

            //Re-cast prompt
            let cast = prompt("Press [Enter] to cast again");

            // Terminal clear
            console.clear();

        }

        if (fishing === "r") {

            // Terminal clear
            console.clear();

            //Art ===========================================================

            console.log("             o                 o");
            console.log("          o                     ");
            console.log("    o       ______          O   ");
            console.log("          _/  (   \\_           ");
            console.log("_       _/  (       \\_      O  ");
            console.log("| \\_   _/  (   (    0  \\      ");
            console.log("|== \\_/  (   (          |  o   ");
            console.log("|=== _ (   (   (        |       ");
            console.log("|==_/ \\_ (   (          |      ");
            console.log("|_/     \\_ (   (    \\__/      ");
            console.log("         \\_ (      _/          ");
            console.log("           |   |__/             ");
            console.log("           /__/                 ");

            //===============================================================

            //Spacer
            console.log();

            // User stat update
            console.log("You let the " + newFish.fish + " go.");
            console.log("Your total weight is:  " + totalWeight.toFixed(2) + "lbs");
            console.log("You have made a total of:  $" + totalValue + ".00");
            console.log("You have cought:  " + fishAmount);
            console.log("The current time is:  " + timeHour + ":00" + timeAmpm);

            //Spacer
            console.log();

            //Re-cast prompt
            let cast = prompt("Press [Enter] to cast again");

            // Terminal clear
            console.clear();

        }
    }
}
//While loop end/////////////////////////////////////////////////////////////

//ENDGAME///////////////////////////////////////////////////////////////////

console.log("TIME'S UP!");
console.log("Your total weight is now:  " + totalWeight.toFixed(2) + "lbs");
console.log("You made a total of:  $" + totalValue + ".00");
console.log("You cought:  " + fishAmount + " fish");
console.log();
console.log();
console.log("░██████╗░░█████╗░███╗░░░███╗███████╗  ░█████╗░██╗░░░██╗███████╗██████╗░");
console.log("██╔════╝░██╔══██╗████╗░████║██╔════╝  ██╔══██╗██║░░░██║██╔════╝██╔══██╗");
console.log("██║░░██╗░███████║██╔████╔██║█████╗░░  ██║░░██║╚██╗░██╔╝█████╗░░██████╔╝");
console.log("██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░  ██║░░██║░╚████╔╝░██╔══╝░░██╔══██╗");
console.log("╚██████╔╝██║░░██║██║░╚═╝░██║███████╗  ╚█████╔╝░░╚██╔╝░░███████╗██║░░██║");
console.log("░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝  ░╚════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝");