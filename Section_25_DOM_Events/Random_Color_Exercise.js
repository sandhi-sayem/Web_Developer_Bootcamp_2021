// My version

// const btn = document.querySelector('#btn');
// const h1 = document.querySelector('h1');
// const body = document.querySelector('body');

// function clicked() {
//     const red = Math.floor(Math.random() * 255) + 1;
//     const green = Math.floor(Math.random() * 255) + 1;
//     const blue = Math.floor(Math.random() * 255) + 1;
//     h1.innerText = `rgb(${red}, ${green}, ${blue})`;
//     btn.innerText = 'Change Color';
//     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

// btn.addEventListener('click', clicked);


// Colt Steele version
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255) + 1;
//     const g = Math.floor(Math.random() * 255) + 1;
//     const b = Math.floor(Math.random() * 255) + 1;
//     return `rgb(${r}, ${g}, ${b})`;
// }

// Updating Colt Steele version to handle dark color background
const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor[0];
    h1.innerText = newColor[0];
    console.log(newColor[1]);
    if (newColor[1] <= 100) {
        h1.style.color = 'white';
    } else {
        h1.style.color = 'black';
    }
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 50) + 1;
    const g = Math.floor(Math.random() * 50) + 1;
    const b = Math.floor(Math.random() * 50) + 1;
    return [`rgb(${r}, ${g}, ${b})`, r + g + b];
}