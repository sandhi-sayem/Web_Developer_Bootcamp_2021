// console.log('Test');

// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

const square = function (num1) {
    return num1 * num1;
    // return Math.pow(num1);
}

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f();
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

// callTwice(rollDie);
// callTenTimes(rollDie);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log('Congrats, I am a good function!');
            console.log('You win nothing!');
        }
    } else {
        return function () {
            alert('You have been infected by a computer virus!');
            alert('Stop trying to close this window!');
            alert('Stop trying to close this window!');
        }
    }
}

// const mystery = makeMysteryFunc();
// mystery();

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 130);

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

// function isBetween2(num) {
//     return num >= 1 && num <= 10;
// }
