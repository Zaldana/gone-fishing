
// Prompt-Sync with exit ================================================

const prompt = require('prompt-sync')({ sigint: true });

// Multiline Prompt-Sync Bug Fix ========================================

const multiLinePrompt = ask => {
    const lines = ask.split(/\r?\n/);
    const promptLine = lines.pop();
    console.log(lines.join('\n'));
    return prompt(promptLine);
};

// Chalk colors ==============================================================

const chalk = require('chalk');

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

// Title Art ============================================================

console.log((chalk.blue("====================================================================================")));
console.log((chalk.blue("░██████╗░░█████╗░███╗░░██╗███████╗  ███████╗██╗░██████╗██╗░░██╗██╗███╗░░██╗░██████╗░")));
console.log((chalk.blue("██╔════╝░██╔══██╗████╗░██║██╔════╝  ██╔════╝██║██╔════╝██║░░██║██║████╗░██║██╔════╝░")));
console.log((chalk.blue("██║░░██╗░██║░░██║██╔██╗██║█████╗░░  █████╗░░██║╚█████╗░███████║██║██╔██╗██║██║░░██╗░")));
console.log((chalk.blue("██║░░╚██╗██║░░██║██║╚████║██╔══╝░░  ██╔══╝░░██║░╚═══██╗██╔══██║██║██║╚████║██║░░╚██╗")));
console.log((chalk.blue("╚██████╔╝╚█████╔╝██║░╚███║███████╗  ██║░░░░░██║██████╔╝██║░░██║██║██║░╚███║╚██████╔╝")));
console.log((chalk.blue("░╚═════╝░░╚════╝░╚═╝░░╚══╝╚══════╝  ╚═╝░░░░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░")));
console.log((chalk.blue("====================================================================================")));

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
" + chalk.red(fishAmount + " fish, ") + "and earned" + chalk.red(" $" + totalValue + ".00") + "\n\
\n\
Press " + chalk.green("[Enter]") + " to begin fishing");

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

    // Fish weight check & Warning ==================================================

    if (Number(newFish.weight) + Number(totalWeight) > 10) {

        //Art ===========================================================

        console.log((chalk.green("             o                 o")));
        console.log((chalk.green("          o                     ")));
        console.log((chalk.green("    o       ______          O   ")));
        console.log((chalk.green("          _/  (   \\_           ")));
        console.log((chalk.green("_       _/  (       \\_      O  ")));
        console.log((chalk.green("| \\_   _/  (   (    0  \\      ")));
        console.log((chalk.green("|== \\_/  (   (          |  o   ")));
        console.log((chalk.green("|=== _ (   (   (        |       ")));
        console.log((chalk.green("|==_/ \\_ (   (          |      ")));
        console.log((chalk.green("|_/     \\_ (   (    \\__/      ")));
        console.log((chalk.green("         \\_ (      _/          ")));
        console.log((chalk.green("           |   |__/             ")));
        console.log((chalk.green("           /__/                 ")));
        console.log();
        console.log();

        //===============================================================

        //Spacer
        console.log("==============================================================");
        console.log();

        // Current user stats
        console.log("Your total weight is:  " + chalk.green(totalWeight.toFixed(2) + "lbs"));
        console.log("You have made a total of: " + chalk.green("$" + totalValue + ".00"));
        console.log("You have caught:  " + chalk.green(fishAmount + " fish"));
        console.log("The current time is:  " + chalk.green(timeHour + ":00" + timeAmpm));

        // Spacer
        console.log();
        console.log("==============================================================");

        //Pack is too heavy prompt
        let tooHeavy = multiLinePrompt("\n\
You reeled in a " + chalk.green(newFish.fish) + " weighing " + chalk.green(newFish.weight + "lbs") + "\n\
and valued at " + chalk.green("$" + newFish.value + ".00") + "\n\
\n\
Unfortunately the fish is too heavy to add to your bag and it got away\n\
\n\
Press " + chalk.yellow("[Enter]") + " to cast again.");

        // Terminal clear
        console.clear();

    }

    // Fishing Start ///////////////////////////////////////////////////////

    if (Number(newFish.weight) + Number(totalWeight) <= 10) {

        // Spacer
        console.log("==============================================================");
        console.log();

        // Current user stats
        console.log("Your total weight is:  " + chalk.green(totalWeight.toFixed(2) + "lbs"));
        console.log("You have made a total of:  " + chalk.green("$" + totalValue + ".00"));
        console.log("You have caught:  " + chalk.green(fishAmount + " fish"));
        console.log("The current time is:  " + chalk.green(timeHour + ":00" + timeAmpm));

        // Spacer
        console.log();
        console.log("==============================================================");

        if (Number(newFish.weight) + Number(totalWeight) > 7.5) {

            console.log((chalk.red("Don't forget your pack limit is only 10lbs!")));

        }

        // Catch or release prompt
        let fishing = multiLinePrompt("\n\
You reeled in a " + chalk.green(newFish.fish) + " weighing " +
            chalk.green(newFish.weight + "lbs") + "\n\
and valued at " + chalk.green("$" + newFish.value + ".00") + "\n\
\n\
\n\
Would you like to: "+ chalk.yellow("[c]") + "atch or " + chalk.yellow("[r]") + "elease ?)\n\
\n\
");

        // IF fishing statements ============================================

        if (fishing === "c") {

            // Terminal clear
            console.clear();

            //Art ===========================================================

            console.log((chalk.green("                                      ____        ")));
            console.log((chalk.green("                                 /\\|    ~~\\     ")));
            console.log((chalk.green("                                / '  |  ,-.`\\    ")));
            console.log((chalk.green("                               |       | X | |    ")));
            console.log((chalk.green("                         ______|________`-'  |X   ")));
            console.log((chalk.green("                       /'          ~~~~~~~~~,     ")));
            console.log((chalk.green("                      /'             ,_____,/_    ")));
            console.log((chalk.green("                   ,/'        ___,'~~         ;   ")));
            console.log((chalk.green("~~~~~~~~|~~~~~~~|---         /  X,~~~~~~~~~~~~,   ")));
            console.log((chalk.green("        |       |           |  XX'____________'   ")));
            console.log((chalk.green("        |       |          /' XXX|            ;   ")));
            console.log((chalk.green("        |               --x|  XXX,~~~~~~~~~~~~,   ")));
            console.log((chalk.green("        |       |         X|     '____________'   ")));
            console.log((chalk.green("        |   o   |----~~~~\\__XX\\            |XX  ")));
            console.log((chalk.green("        |       |           XXX`\\          /XXXX ")));
            console.log((chalk.green("~~~~~~~~'~~~~~~~'                `\\xXXXXx/'\\XXX ")));
            console.log((chalk.green("                                    /XXXXXX\      ")));
            console.log((chalk.green("                                  / XXXXXXXXXX\   ")));
            console.log((chalk.green("                                /XXXXXX/^\\XDCAU\\")));
            console.log((chalk.green("                               ~~~~~~~~   ~~~~~~~ ")));
            //Spacer
            console.log();
            console.log();
            //===============================================================

            // Score update
            fishAmount += 1;
            totalWeight += Number(newFish.weight);
            totalValue += newFish.value;

            // User stat update
            console.log("Your new total weight is now:  " +
                chalk.green(totalWeight.toFixed(2) + "lbs"));
            console.log("You have made a total of:  " + chalk.green("$" + totalValue + ".00"));
            console.log("You have caught:  " + chalk.green(fishAmount + " fish"));
            console.log("The current time is:  " + chalk.green(timeHour + ":00" + timeAmpm));

            //Spacer
            console.log();

            //Re-cast prompt
            let cast = prompt("Press " + chalk.yellow("[Enter]") + " to cast again.");

            // Terminal clear
            console.clear();

        }

        if (fishing === "r") {

            // Terminal clear
            console.clear();

            //Art ===========================================================

            console.log((chalk.green("             o                 o")));
            console.log((chalk.green("          o                     ")));
            console.log((chalk.green("    o       ______          O   ")));
            console.log((chalk.green("          _/  (   \\_           ")));
            console.log((chalk.green("_       _/  (       \\_      O  ")));
            console.log((chalk.green("| \\_   _/  (   (    0  \\      ")));
            console.log((chalk.green("|== \\_/  (   (          |  o   ")));
            console.log((chalk.green("|=== _ (   (   (        |       ")));
            console.log((chalk.green("|==_/ \\_ (   (          |      ")));
            console.log((chalk.green("|_/     \\_ (   (    \\__/      ")));
            console.log((chalk.green("         \\_ (      _/          ")));
            console.log((chalk.green("           |   |__/             ")));
            console.log((chalk.green("           /__/                 ")));

            //===============================================================

            //Spacer
            console.log();

            // Release message
            console.log(chalk.red("You let the " + newFish.fish + " go."));

            //Spacer
            console.log();

            //User Stats
            console.log("========================================================");
            console.log();
            console.log("Your total weight is:  " + chalk.green(totalWeight.toFixed(2) + " lbs"));
            console.log("You have made a total of:  " + chalk.green("$" + totalValue + ".00"));
            console.log("You have caught:  " + chalk.green(fishAmount + " fish"));
            console.log("The current time is:  " + chalk.green(timeHour + ":00" + timeAmpm));
            console.log();
            console.log("========================================================");

            //Spacer
            console.log();

            //Re-cast prompt
            let cast = prompt("Press " + chalk.yellow("[Enter]") + " to cast again.");

            // Terminal clear
            console.clear();

        }
    }
}
//While loop end/////////////////////////////////////////////////////////////

//ENDGAME///////////////////////////////////////////////////////////////////
console.log();
console.log();
console.log(chalk.red("TIME'S UP!"));
console.log();
console.log("Your final weight is:  " + chalk.red(totalWeight.toFixed(2) + " lbs"));
console.log("You made a total of:  " + chalk.red("$" + totalValue + ".00"));
console.log("You caught:  " + chalk.red(fishAmount + " fish"));
console.log();
console.log();
console.log((chalk.red("░██████╗░░█████╗░███╗░░░███╗███████╗  ░█████╗░██╗░░░██╗███████╗██████╗░")));
console.log((chalk.red("██╔════╝░██╔══██╗████╗░████║██╔════╝  ██╔══██╗██║░░░██║██╔════╝██╔══██╗")));
console.log((chalk.red("██║░░██╗░███████║██╔████╔██║█████╗░░  ██║░░██║╚██╗░██╔╝█████╗░░██████╔╝")));
console.log((chalk.red("██║░░╚██╗██╔══██║██║╚██╔╝██║██╔══╝░░  ██║░░██║░╚████╔╝░██╔══╝░░██╔══██╗")));
console.log((chalk.red("╚██████╔╝██║░░██║██║░╚═╝░██║███████╗  ╚█████╔╝░░╚██╔╝░░███████╗██║░░██║")));
console.log((chalk.red("░╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚══════╝  ░╚════╝░░░░╚═╝░░░╚══════╝╚═╝░░╚═╝")));
console.log();
console.log();
console.log();
console.log();