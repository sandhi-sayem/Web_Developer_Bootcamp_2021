// console.log('test');

function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// singSong();

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`);
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return false;
    }
    return num1 + num2;
}

// console.log(add(add(1, 3), 4));

function lastElement(element) {
    if (element.length === 0) return null;
    return element[element.length - 1];
}

// console.log(lastElement([3, 4, 7]));
// console.log(lastElement([1]));
// console.log(lastElement([]));

function capitalize(str) {
    if (!str) {
        return null;
    }
    return str[0].toUpperCase() + str.slice(1);
}

function sumArray(num1) {
    let total = 0;
    for (let val of num1) {
        total += val;
    }
    return total;
}

function returnDay(num1) {
    const objectOfWeek = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };
    const arrayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num1 < 1 || num1 > 7 || !num1) {
        return null;
    }
    return `Object: ${objectOfWeek[num1]}   ||    Array: ${arrayOfWeek[num1 - 1]}`;
}