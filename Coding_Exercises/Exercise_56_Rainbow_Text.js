const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const allspans = document.querySelectorAll('span');

for (let i = 0; i < allspans.length; i++) {
    allspans[i].style.color = colors[i];
}