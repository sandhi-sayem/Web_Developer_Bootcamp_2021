const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("You clicked me!");
    console.log('I hope it worked');
}

function scream() {
    console.log('AAAAAHHHH');
    console.log('Stop touching me!');
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => (alert('You clicked the h1'));

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', () => (alert('Clicked!')));
// btn3.addEventListener('dblclick', () => (alert('Clicked!')));
// btn3.addEventListener('mouseup', () => (alert('Clicked!')));
// btn3.addEventListener('click', scream);

function twist() {
    console.log('Twist!');
}

function shout() {
    console.log('Shout!');
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout; // this will replace twist, so we will never get twist to display since we can't set up two function same time using onclick

tasButton.addEventListener('click', twist);
// tasButton.addEventListener('click', twist, { once: true }); // twist will run a single time
tasButton.addEventListener('click', shout); // able to run both callback functions


