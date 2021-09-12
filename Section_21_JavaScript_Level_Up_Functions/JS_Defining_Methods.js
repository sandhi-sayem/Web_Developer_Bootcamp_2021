// console.log('test');

// const myMath = {
//     PI: 3.14159,
//     square: function (num) {
//         return num * num;
//     },
//     cube: function (num) {
//         return num ** 3;
//     }
// }

// the term 'function' is not needed

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

// console.log(myMath.PI);
// console.log(myMath["PI"]);
// console.log(myMath.square(2));
// console.log(myMath["square"](2));
// console.log(myMath.cube(2));
// console.log(myMath["cube"](2));

const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

// console.log(square.area(10));
// console.log(square.perimeter(10));

const cat = {
    name: 'Blue Steele',
    color: 'Grey',
    breed: 'Scottish fold',
    meow() {
        // console.log('MEOW MEOW MEOW');
        console.log('This is: ', this);
        console.log(`${this.name} says MEOWWW!`);
    }
}

// const meow2 = cat.meow;
// meow2();

const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount += 1;
        return 'EGG';
    }
}

// try {
//     hello.toUpperCase();
// } catch {
//     console.log('ERROR!');
// }
// console.log('After!');

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log(e);
        console.log('Please pass a string next time.');
    }
}
