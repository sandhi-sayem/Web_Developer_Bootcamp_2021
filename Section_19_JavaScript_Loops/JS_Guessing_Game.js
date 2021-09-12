let maximum = parseInt(prompt("Enter the maximum number greater than 0):"));
while (!maximum) {
    maximum = parseInt(prompt("Invalid entry. Please re-enter a valid number greater than 0):"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess (greater than 0):"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess (greater than 0):");
    } else {
        guess = prompt("Too low! Enter a new guess (greater than 0):");
    }
}
if (guess === 'q') {
    console.log("OK, you quit!");
} else {
    if (attempts === 1) {
        console.log(`You got it! It took you ${attempts} guess!!`);
    } else {
        console.log(`You got it! It took you ${attempts} guesses!!`);
    }
    console.log(`Maxium number: ${maximum}`);
    console.log(`Target number: ${targetNum}`);
    console.log(`Your guess: ${guess}`);
}