// console.log('test');

// for (let i = 1; i <= 5; i++) {
//     console.log(`i is: ${i}`);
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(`i is: ${i}`);
// }

// const animals = [
//     'Alligator',
//     'Antelope',
//     'Baboon',
//     'Bear',
//     'Bee',
//     'Bird',
//     'Butterfly',
//     'Camel',
//     'Cat',
//     'Chicken',
//     'Crow',
//     'Deer',
//     'Dog',
//     'Dolphin',
//     'Elephant',
//     'Fox',
//     'Giraffe',
//     'Goat',
//     'Hamster',
//     'Heron',
//     'Horse',
//     'Human',
//     'Kangaroo',
//     'Leopard',
//     'Lion',
//     'Monkey',
//     'Mosquito',
//     'Mouse',
//     'Panda',
//     'Penguin',
//     'Pig',
//     'Rabbit',
//     'Rat',
//     'Shark',
//     'Sheep',
//     'Snake',
//     'Spider',
//     'Swan',
//     'Tiger',
//     'Whale',
//     'Wolf',
//     'Zebra'
// ]

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i]);
// }

// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i + 1, animals[i]);
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase());
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j < 4; j++) {
//         console.log(`   j is: ${j}`);
//     }
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanity', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     // console.log(seatingChart[i]);
//     const row = seatingChart[i];
//     console.log(`ROW #${i + 1}:`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(`   ${row[j]}`);
//     }
// }

// let count = 0;

// while (count < 10) {
//     count++;
//     console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Please enter the secret code...");
// while (guess !== SECRET) {
//     guess = prompt("You guessed wrong. Please re-enter the secret code...");
// }
// console.log("Congrats!! You entered the correct secret code!!");

// let input = prompt("Hey, say something!!");
// while (true) {
//     input = prompt("Hey, say something else!!");
//     if (input.toLocaleLowerCase() === "quit") break;
// }
// console.log("Ok, you win!!");

// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     if (i === 10) break;
// }

// let maximum = parseInt(prompt("Enter the maximum number greater than 0):"));
// while (!maximum) {
//     maximum = parseInt(prompt("Invalid entry. Please re-enter a valid number greater than 0):"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess (greater than 0):"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess (greater than 0):");
//     } else {
//         guess = prompt("Too low! Enter a new guess (greater than 0):");
//     }
// }
// if (guess === 'q') {
//     console.log("OK, you quit!");
// } else {
//     if (attempts === 1) {
//         console.log(`You got it! It took you ${attempts} guess!!`);
//     } else {
//         console.log(`You got it! It took you ${attempts} guesses!!`);
//     }
//     console.log(`Maxium number: ${maximum}`);
//     console.log(`Target number: ${targetNum}`);
//     console.log(`Your guess: ${guess}`);
// }

// const subReddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subReddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subReddits[i]}`);
// }

// for (let subReddit of subReddits) {
//     console.log(`Visit reddit.com/r/${subReddit}`);
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanity', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// }

// for (let char of "hello world") {
//     console.log(char);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let num of numbers) {
//     console.log(Math.pow(num, 2));
// }

const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for (let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`);
// }

let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(`Total score is ${total} and average is ${total / scores.length}`);

