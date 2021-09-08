console.log("Before conditional");
let random = Math.random();
if (1 + 1 === 2) {
    console.log("Math still works!");
}

if (random < 0.5) {
    console.log(`Your number ${random} is less than 0.5!!!`);
}

if (random > 0.5) {
    console.log(`Your number ${random} is greater than 0.5!!!`);
}

console.log("After conditional");

function isEven(num) {
    if (num % 2 === 0) {
        console.log('even');
    }
}

const dayOfWeek = 'sunday';

//const dayOfWeek = prompt("Please enter day of the week:").toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("I don't like Monday!");
} else if (dayOfWeek === 'friday') {
    console.log("I love Friday!");
} else {
    console.log(`${dayOfWeek} is okay.`);
}


function getColor(phrase) {
    phrase = phrase.toLowerCase();
    if (phrase === 'stop') {
        console.log('red');
    } else if (phrase === 'slow') {
        console.log('yellow');
    } else if (phrase === 'go') {
        console.log('green');
    } else {
        console.log('purple');
    }
}

getColor('stop');

const num = 102;

if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

const dayNum = 3;
switch (dayNum) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
    case 7:
        console.log("WEEKEND");
        break;
    default:
        console.log("I DON'T KNOW THAT");
        break;
}