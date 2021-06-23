//Fish adjective 1
const adjOne = ["giant", "lazy", "snapping", "hairy", "iridescent", "sexy", "ornery", "spiny", "venomous", "classic"];

//Fish adjective 2
const adjTwo = ["squishy", "chunky", "sneaky", "suspicious", "sensitive", "greedy", "rabid", "angry", "stupid", "yummy"];

//Type of Fish
const fish = ["trout", "carp", "catfish", "loach", "bass", "tilapia", "salmon", "arowana", "shark", "guppy"];

function generateRandomFish(adjOne, adjTwo, fish) {

    let firstAdj = [];
    let secndAdjs = [];
    let fishType = [];
    const weight = (Math.floor((Math.random() * 10)) + 1);
    const valueRnd = Math.round(Math.random() * 10);
    const value = valueRnd.toFixed(2);

    for (i = 0; i < 1; i++) {
        firstAdj = adjOne[Math.floor((Math.random() * 9)) + 1];
        secndAdjs = adjTwo[Math.floor((Math.random() * 9)) + 1];
        fishType = fish[Math.floor((Math.random() * 9)) + 1];
    }

    return {
        fish: firstAdj + " " + secndAdjs + " " + fishType,
        weight: weight + "lbs",
        value: "$" + value
    };

}