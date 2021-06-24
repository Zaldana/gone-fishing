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

const newFish = generateRandomFish(adjOne, adjTwo, fish);

console.log(newFish);