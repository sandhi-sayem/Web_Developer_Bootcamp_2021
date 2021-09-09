let lottoNumbers = [1, 3, 4, 7, 8, 0];

// console.log(lottoNumbers);

let days = ['Monday', 'Tuesday', 'Wednesday'];

console.log(days);
console.log(days[1][2]);

let color = ['rad', 'yellow', 'orangi', 'green'];
color[0] = 'red';
console.log(color);
color[2] = 'orange';
console.log(color);
color[8] = 'violet';
console.log(color);

// push (adds at the end) and pop (removes the last element)

let movieLine = ['tom', 'nancy'];
movieLine.push('oliver');
console.log(movieLine);
movieLine.push('harry', 'terry');
console.log(movieLine);
movieLine.pop();
console.log(movieLine);

// shift (removes first element) and unshift (adds to the beginning)

movieLine.shift();
console.log(movieLine);
movieLine.unshift('jerry');
console.log(movieLine);

// concat (combines arrays)

let cats = ['blue', 'kitty'];
let dogs = ['rusty', 'wyatt'];
let catsDogs = cats.concat(dogs);
let dogsCats = dogs.concat(cats);

console.log(catsDogs);
console.log(dogsCats);

//  includes (if arrays contains or not)
console.log(catsDogs.includes('blue'));
console.log(catsDogs.includes('Blue'));

// indexof (returns the index of the element)
console.log(dogsCats.indexOf('wyatt'));
console.log(dogsCats.indexOf('blue'));
console.log(dogsCats.indexOf('abcde'));

// reverse (reverses the array and updates the original array (destructive))
console.log(catsDogs);
console.log(catsDogs.reverse());
console.log(catsDogs);
console.log(catsDogs.reverse());
console.log(catsDogs);

// slice (get a portion of an array, start index is included in sliced array but not the end index, -1 starts at the end of the array)
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
console.log(colors);
console.log(colors.slice(3));
console.log(colors.slice(2, 6));
console.log(colors.slice(-3));

//splice (updates array by removing or adding element with in the array (destructive))

console.log(colors.splice(5, 1));
console.log(colors);
console.log(colors.splice(1, 0, 'red-orange'));
console.log(colors);
console.log(colors.splice(4, 0, 'yellow-green', 'forestgreen'));
console.log(colors);
console.log(colors.splice(2, 2, 'Deleted!!'));
console.log(colors);

// sort (converts element into strings then compares the UTF-16 values and sorts the array in ascending order (destructive))

let scores = [1, 70, 100, 2500, 9, -12, 0, 34];
console.log(scores);
console.log(scores.sort());
console.log(scores);

// reference types and equality -- JavaScript compares the memory reference and not the contents

console.log(['hi', 'bye'] === ['hi', 'bye']);
console.log([1, 2] === [1, 2]);
console.log([] === []);

let nums = [1, 2, 3];
let numsCopy = nums;

console.log(nums);
console.log(numsCopy);
nums.push(4);
console.log(nums);
console.log(numsCopy);
numsCopy.pop();
console.log(nums);
console.log(numsCopy);

console.log(nums === numsCopy);

// const (elements/values can change but the reference stays the same)

const myNums = [1, 2, 3];
console.log(myNums);
myNums.push(4);
console.log(myNums);
// myNums = [3, 4, 5]; // displays error: Uncaught TypeError: Assignment to constant variable.

// multi dimensional array

const gameBoard = [['X', 'O', 'X'], ['O', null, 'X'], ['O', 'O', 'X']];
console.log(gameBoard);
console.log(gameBoard[1][1]);
