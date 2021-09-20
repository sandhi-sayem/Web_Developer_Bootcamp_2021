const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation(); // stop bubbling, parent event listeners will not trigger until clicked on the parent itself
});

container.addEventListener('click', function () {
    this.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
};

