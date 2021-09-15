// console.log('test');

const nums = [1, 3, 4, 10, 23, 64, 6, 9, 93, 98];

console.log(nums);
console.log(Math.max(1, 3, 4, 10, 23, 64, 6, 9, 93, 98));
console.log(Math.min(1, 3, 4, 10, 23, 64, 6, 9, 93, 98));

console.log(Math.max(...nums)); // doesn't change the original array
console.log(Math.min(...nums));

console.log(...nums); // separated by space

console.log(...'hello');

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats, ...dogs, 'Speedy'];

console.log(cats);
console.log(dogs);
console.log(allPets);

const feline = { legs: 4, family: 'Felidae' };
const canine = { isFurry: true, family: 'Caninae' };

const catDog = { ...feline, ...canine, color: 'black' }; // canine will win over when they both share same key

console.log(catDog);

const str = { ...'testing' }; // indices are used for key

console.log(str);

const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = { ...dataFromForm, id: 2345, isAdmin: false };

console.log(newUser);

