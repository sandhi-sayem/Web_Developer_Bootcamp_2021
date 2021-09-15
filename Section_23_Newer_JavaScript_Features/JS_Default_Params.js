// console.log('test');

function rollDie(numSides = 6) { // setting a default value to numSides
    // if (numSides === undefined) { // old way of checking if a value is provided by user/null
    //     numSides = 6;
    // }
    return Math.floor(Math.random() * numSides) + 1;
};

function greet(person, msg = 'Hey There', punc = '!') { // try to put default paramter at the end in case if there's only one value passed to the function
    console.log(`${msg}, ${person}${punc}`);
};