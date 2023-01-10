
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stoud
});

//[Who from Where][Action]{Detail}

let names = ['Gosho', 'Pesho', 'Sasho', 'Tisho', 'Atanas', 'Az']
let place = ["Sofia", "Plovdiv", "Varna", "Burgas"]
let verbs = ["eats", "holds", "sees", "plays with", "brings"]
let noun = ["stones", "cake", "apple", "laptop", "bikes"]
let adverbs = ["slowly", "diligently", "warmly", "sadly", "rapidly"]
let details = ["near the river", "at home", "in the park"]

function getRandomWord(array){
    let word = array[Math.floor(Math.random() * array.length)];
    return word;
}

let randomName = getRandomWord(names)
let randomPlace = getRandomWord(place)
let randomVerb = getRandomWord(verbs)
let randomNoun = getRandomWord(noun)
let randomAdverb = getRandomWord(adverbs)
let randomDetail = getRandomWord(details)

let who = `${randomName} from ${randomPlace}`;
let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
let sentence = `${who} ${action} ${randomDetail}`;

console.log('Hello this is your first random generated sentence');
console.log(sentence);






 


