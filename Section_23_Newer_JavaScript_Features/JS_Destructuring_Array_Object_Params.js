// console.log('test');

// arrays

const scores = [342343, 294323, 983293, 834321, 576384, 493028, 793023];

const highScore = scores[0];
const secondHighScore = scores[1];

const [gold, silver, bronze, ...everyoneElse] = scores;

// console.log(gold, silver, bronze, everyoneElse); // unpacks/extracts the values in order without changing the original array

// objects

const user = {
    email: 'harvey@gmail.com',
    password: 'sCott1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Franciso Board of Supervisors',
    city: 'San Francisco',
    state: 'California'
}

const user2 = {
    email: 'Stacy@gmail.com',
    firstName: 'Stacy',
    lastName: 'Gonzalez',
    born: 1987,
    city: 'Tulsa',
    state: 'Oklahoma'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// const { email, firstName, lastName, city, bio } = user; // generate variables and hold the extracted values from object

// console.log(email);
// console.log(firstName);
// console.log(lastName);
// console.log(city);
// console.log(bio);

// const { born: birthYear, died: deathYear = 'N/A' } = user; // rename the variables with values from the object, default value is ignored

// const { city, state, died = 'N/A', bio } = user2; // default value of died is used, bio is undefined

// console.log(city);
// console.log(state);
// console.log(died);
// console.log(bio);

// Params

// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`;
// }

// console.log(fullName(user));

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`;
// }

// console.log(fullName(user));

function fullName({ firstName, lastName = 'default' }) {
    return `${firstName} ${lastName}`;
}

console.log(fullName(user));

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

// console.log(movies.filter((movie) => movie.score >= 90));
// console.log(movies.filter(({ score }) => score >= 90));

// console.log(movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rate ${movie.score}`;
// }))

console.log(movies.map(({ title, year, score }) => {
    return `${title} (${year}) is rate ${score}`;
}))


