// console.log('test');

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function print(element) {
//     console.log(element);
// }

// numbers.forEach(print);

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand by Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
];

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`);
// })

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

// console.log(doubles);

// const movieTitles = movies.map(function (movie) {
//     return movie.title.toUpperCase();
// })

// console.log(movieTitles);

// const add = function (x, y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = num => {
//     return num * num;
// }

// const rollDie = () => {
//     return Math.floor(Math.random() * 10) + 1;
// }

// implicit return, parentheses replaces curly, only for single lines
// const rollDie = () => (
//     Math.floor(Math.random() * 10) + 1
// )

// const add = (a, b) => a + b;

// const greet = str => {
//     return `Hey ${str}!`;
// }

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`;
// })

// const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10}`);

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// console.log('Hello!...');
// setTimeout(() => {
//     console.log('...are you still there?');
// }, 3000);  // are you still there is printed 3 seconds after Hello on console

// console.log("Goodbye!");

// setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// const id = setInterval(() => {
//     console.log(Math.random());
// }, 2000);

// clearInterval(id); // one way to stop the interval

// numbers.filter(n => {
//     return n < 10;
// })

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80;
// })

// const goodMovies = movies.filter(m => m.score > 80);
// const goodTitles1 = goodMovies.map(m => m.title);
// const badMovies = movies.filter(m => m.score < 70);
// const recentMovies = movies.filter(m => m.year > 2000);

// const goodTitles2 = movies.filter(m => m.score > 80).map(m => m.title);

// console.log(goodMovies);
// console.log(badMovies);
// console.log(recentMovies);
// console.log(goodTitles1);
// console.log(goodTitles2);

// const validUserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];
// => ["mark", "carrie98", "MoanaFan"]

// const names = validUserNames.filter(n => n.length < 10);

// function validUserNames(names) {
//     return names.filter(n => n.length < 10);
// }

// console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));

// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

// exams.every(score => score >= 75); // returns true, everything element has to pass the criteria
// exams.every(score => score >= 80); // returns false

// exams.some(score => score >= 75); // returns true, some (1 or more) element has to pass the criteria
// exams.some(score => score >= 100); // returns false

// movies.some(m => m.year > 2015);

// function allEvens(nums) {
//     return nums.every(n => n % 2 === 0);
// }

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//     return total + price;
// });

// const total = prices.reduce((total, price) => total + price);

// console.log(total);

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// });

// const maxPrice = prices.reduce((max, price) => {
//     if (price > max) {
//         return price;
//     }
//     return max;
// });

// console.log(minPrice);
// console.log(maxPrice);

// const highestRatedMovie = movies.reduce((highestRated, currentMovie) => {
//     if (currentMovie.score > highestRated.score) {
//         return currentMovie;
//     }
//     return highestRated;
// });

// console.log(highestRatedMovie);

// const evens = [2, 4, 6, 8, 10];
// const evenTotal = evens.reduce((sum, num) => sum + num, 100); // the second argument (100) is to set the initial value

// console.log(evenTotal);

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`
//     }
// };

// const person = {
//     firstName: 'Viggo',
//     lastName: 'Mortensen',
//     fullName: () => { // 'this' won't work with arrow function as it will refer to 'window' object unlike 'function'
//         return `${this.firstName} ${this.lastName}`;
//     },
//     shoutName: function () {
//         setTimeout(function () { // also won't work as setTimeout belongs to 'window' object
//             console.log(this.fullName())
//         }, 3000);
//     }
// };

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this.fullName())
        }, 3000);
    }
};