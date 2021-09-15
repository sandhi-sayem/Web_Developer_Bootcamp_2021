// console.log('test');

// function sum() {
//     console.log(arguments); // arguments holds all the parameters like an array but NOT an array
// }

// sum(34, 24, 55);

// function sum() {
//     return arguments.reduce((total, num) => total + num); // won't work since arguments is not an actual array
// }

// function sum(...nums) { // ... collect rest of the parameters
//     console.log(nums);
// }

function sum(...nums) {
    return nums.reduce((total, num) => total + num);
}

console.log(sum(34, 24, 55));

function raceResults(gold, silver, ...everyoneElse) {
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`And thanks to everyone else: ${everyoneElse}`);
}

console.log(raceResults('Tammy', 'Todd', 'Tina', 'Trevor', 'Travis'));