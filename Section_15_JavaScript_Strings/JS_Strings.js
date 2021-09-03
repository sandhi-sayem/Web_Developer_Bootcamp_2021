let bestColor = 'purple';
let quote = 'You had me at "hello"';

console.log(bestColor);
console.log(quote);

let animal = "Dubmo Octopus";

console.log(animal[6]);
console.log(animal.length);
console.log('JS is cool'.length);
console.log("con" + "cat");
console.log(11 + " string");

let msg = "leave me alone right now i hate you plz";
console.log(msg.toUpperCase());

let userInput = "    Hello my name is John Doe    ";
console.log(userInput.trim());

console.log(' hello again '.trim().toUpperCase());

const message = "    TASTE THE RAINBOW!  ";
let whisper = message.trim().toLowerCase();
console.log(whisper);

console.log("haha that is so funny!".indexOf('t'));
console.log("haha that is so funny!".indexOf('z'));
console.log("haha that is so funny!".indexOf('so'));
console.log("haha that is so funny!".slice(5));
console.log("haha that is so funny!".slice(3, 9));

let testMsg = "haha that is so funny, haha!"
console.log(testMsg.slice(testMsg.indexOf('is'), testMsg.indexOf('is') + 5));
console.log(testMsg.replace('haha', 'teehee'));
console.log("repeat ".repeat(3));

const word = "skateboard";
let facialHair = word.slice(5).replace('o', 'e');
console.log(facialHair);

let product = 'Artichoke';
let price = 2.25;
let qty = 5;

console.log("You bought " + qty + " " + product + ". Total is: $" + price * qty);
console.log(`You bought ${qty} ${product}. Total is: $${price * qty}`);

console.log(Math.floor(23.434343));
console.log(Math.ceil(23.434343));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10)) + 1;

const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
console.log(roll);



