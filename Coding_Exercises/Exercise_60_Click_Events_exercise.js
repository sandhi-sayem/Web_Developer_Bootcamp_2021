const helloButton = document.querySelector('#hello');

helloButton.addEventListener('click', () => (console.log('hello')));

document.querySelector('#goodbye').addEventListener('click', () => (console.log('goodbye')));