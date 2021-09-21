const p1Button = document.querySelector('#p1button');
const p2Button = document.querySelector('#p2button');
const p1ScoreSpan = document.querySelector('#p1score');
const p2ScoreSpan = document.querySelector('#p2score');
const resetButton = document.querySelector('#resetbutton');
const maxGame = document.querySelector('#maxgame');
let p1Score = 0;
let p2Score = 0;
let maxGameScore = parseInt(maxGame.value);
// console.log(maxGameScore);

maxGame.addEventListener('change', function () {
    maxGameScore = parseInt(maxGame.value);
    // console.log(maxGameScore);
});

p1Button.addEventListener('click', function () {
    p1Score += 1;
    p1ScoreSpan.innerText = `${p1Score}`;
    if (p1Score >= maxGameScore) {
        this.disabled = true;
        p2Button.disabled = true;
        p1ScoreSpan.style.color = 'lightgreen';
        p2ScoreSpan.style.color = 'lightcoral';
    }
});

p2Button.addEventListener('click', function () {
    p2Score += 1;
    p2ScoreSpan.innerText = `${p2Score}`;
    if (p2Score >= maxGameScore) {
        this.disabled = true;
        p1Button.disabled = true;
        p2ScoreSpan.style.color = 'lightgreen';
        p1ScoreSpan.style.color = 'lightcoral';
    }
});

resetButton.addEventListener('click', function () {
    p1Score = 0;
    p1ScoreSpan.innerText = `${p1Score}`;
    p1Button.disabled = false;
    p1ScoreSpan.style.color = 'black';
    p2Score = 0;
    p2ScoreSpan.innerText = `${p2Score}`;
    p2Button.disabled = false;
    p2ScoreSpan.style.color = 'black';
});