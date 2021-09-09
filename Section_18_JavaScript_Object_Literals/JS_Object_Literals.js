const person = {
    firstName: 'Mickey',
    lastName: 'Mouse'
};

console.log(person);

const kitchenSink = {
    favNum: 2343,
    isFunny: true,
    mostDisliked: 'juice',
    colors: ['red', 'blue']
};

console.log(kitchenSink);

console.log(person["firstName"]);
console.log(kitchenSink.mostDisliked);

// keys are converted to strings

const years = { 1999: 'GOOD', 2020: 'BAD' };

console.log(years);
console.log(years["1999"]);
console.log(years[2020]);
// console.log(years.1999); // throws errors

const dumbdumb = { true: 'dat', null: 'asfsadf' };
console.log(dumbdumb["true"]);
console.log(dumbdumb.null);

console.log(person['first' + 'Name']);
let birthYear = 2020;
console.log(years.birthYear); // undefined
console.log(years[birthYear]);

const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

let fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`;
console.log(fullAddress);

const midterms = {
    danielle: 96,
    thomas: 78
};

console.log(midterms);

midterms.thomas = 79;
console.log(midterms);
midterms["danielle"] = 'A';
midterms.thomas = 'C+';
midterms.erza = 'B-';
midterms['antonio'] = 'D';
console.log(midterms);


// nested objects and arrays

const comments = [
    { username: 'Tammy', text: 'lolololol', votes: 9 },
    { username: 'FishBoi', text: 'glub glub', votes: 24324 }
];

console.log(comments);
console.log(comments[1].text);
