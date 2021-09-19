// console.log('test');

const container = document.querySelector('#container');

for (let i = 1; i <= 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = `Button ${i}`;
    container.appendChild(newButton);
}