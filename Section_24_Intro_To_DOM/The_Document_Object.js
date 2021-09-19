// console.log('test');

// getElementById

// const banner = document.getElementById('banner');

// console.dir(banner);

// const toc = document.getElementById('toc');

// console.dir(toc);

// getElementsByTagName

// const allImags = document.getElementsByTagName('img'); // returns a collection that looks like an array but not an array

// console.dir(allImags);
// console.dir(allImags[1]);

// for (let img of allImags) {
//     console.log(img.src);
// }

// for (let img of allImags) {  // can manipulate all images to display the same image
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
// }

// getElementsByClassName 

// const squareImages = document.getElementsByClassName('square'); // returns a collection that looks like an array but not an array

// for (let img of squareImages) {
//     console.log(img.src);
//     // img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'; // only the bottom 3 images will display the same image, the top image is not part of the class
// }


// // querySelector

// const qBanner = document.querySelector('#banner'); // returns only the first match, for example it will return the first paragraph
// const qSquare = document.querySelector('.square');
// const qImage = document.querySelector('img:nth-of-type(2');
// const qAnchor = document.querySelector('a[title="Java"]');

// console.log(qBanner);
// console.log(qSquare);
// console.log(qImage);
// console.log(qAnchor);

// querySelectorAll

// const paragraphs = document.querySelectorAll('p'); // returns all the matching elements as a collection that acts like an array
// const links = document.querySelectorAll('p a');

// console.dir(paragraphs);
// console.log(links);

// for (let link of links) {
//     console.log(link.href);
// }

// const h1 = document.querySelector('h1');

// // console.dir(h1);

// // document.querySelector('p').innerText = 'random stuff';
// console.log(document.querySelector('p').innerText);
// console.log(document.querySelector('p').textContent);

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!! ';
// }

// h1.innerText = '<i>rand</i>'; // won't work as it will replace the original text with tags

// console.log(h1.innerHTML);
// console.log(document.querySelector('p').innerHTML);

// h1.innerHTML = '<i>rand</i>'; // recognizes the tags, italic
// h1.innerHTML += '<sup>blabla</sup>'

// document.querySelector('#banner').id = 'whoops'; // change banner id to something else which will break the styles for the image
// document.querySelector('#whoops').id = 'banner';

// const firstLink = document.querySelector('a');

// console.log(firstLink.href); // getting the address from JavaScript object which is appended by file
// console.log(firstLink.getAttribute('href')); // getAttribute is getting the address directly from the file as is

// firstLink.setAttribute('href', 'https://www.google.com'); // setting/updating the attribute

// const inputText = document.querySelectorAll('input')[1];

// const inputText = document.querySelector('input[type="text"]');

// console.dir(inputText);

// console.log(inputText.type);
// inputText.type = 'password';
// inputText.type = 'color';
// inputText.setAttribute('type', 'text');

// const h1 = document.querySelector('h1');

// h1.style.color = 'green'; // not a good idea to use style as it will use inline styling
// h1.style.fontSize = '3em';
// h1.style.border = '2px solid pink';

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// const h1Computed = window.getComputedStyle(h1); // once the page loads, we can get styles associated with the element
// console.log(h1Computed.color);
// console.log(window.getComputedStyle(h1).fontSize);
// console.log(h1Computed.fontFamily);
// console.log(window.getComputedStyle(h1).marginLeft);
// console.log(h1Computed.margin);

// const h2 = document.querySelector('h2');

// console.log(h2.getAttribute('class'));
// h2.setAttribute('class', 'purple');
// h2.setAttribute('class', 'border');
// let currentClasses = h2.getAttribute('class');
// h2.setAttribute('class', `${currentClasses} purple`); // annoying to keep on adding class to existing ones

// console.dir(h2.classList);
// h2.classList.add('purple');
// h2.classList.add('border'); // adds second class to existing ones
// h2.classList.remove('border');
// console.log(h2.classList.contains('border')); // false
// console.log(h2.classList.contains('purple')); // true
// h2.classList.toggle('purple'); // will apply the class if it's not there, in this case it will turn it off
// h2.classList.toggle('purple'); // turn it back on

// const firstBold = document.querySelector('b');
// console.log(firstBold);
// console.log(firstBold.parentElement);
// console.log(firstBold.parentElement.parentElement);
// console.log(firstBold.parentElement.parentElement.parentElement);

// const paragraph = firstBold.parentElement;

// console.log(paragraph.childElementCount);
// console.log(paragraph.children);
// console.log(paragraph.children[0]);

// const squareImg = document.querySelector('.square');
// console.log(squareImg.parentElement);
// console.log(squareImg.children);
// console.log(squareImg.nextSibling); // might show white space as node
// console.log(squareImg.previousSibling); // miight show white space as node
// console.log(squareImg.nextElementSibling); // will show next element, in this case next image
// console.log(squareImg.previousElementSibling); // will show previous element, in this case previous paragraph

const newImg = document.createElement('img');
console.dir(newImg);

newImg.src = 'https://images.unsplash.com/photo-1631777437196-d240f86f5e97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80';
document.body.appendChild(newImg);
newImg.classList.add('square');

const newH3 = document.createElement('h3');
console.dir(newH3);
newH3.innerText = 'I am new H3!';
document.body.appendChild(newH3);

const p = document.querySelector('p');
// p.append('I am new text yaaaaaayyyy!!!');
p.append('I am new text yaaaaaayyyy!!!', 'This is a second line'); // can add multiple nodes/elements same time

const newB = document.createElement('b');
newB.append('Hi! ');  // append
console.log(newB);
p.prepend(newB); // prepend

const h2 = document.createElement('h2');
h2.append('Are adorable chickens');
console.log(h2);
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2); // insertAdjacentElement
console.log(h1.nextElementSibling);
const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3); // after

const firstLi = document.querySelector('li');
console.dir(firstLi);
// firstLi.removeChild(); // wont remove the element (li), just the child in it (none in this case)
const ul = firstLi.parentElement;
ul.removeChild(firstLi); // this will remove the first li from ul

const b = document.querySelector('b');
b.parentElement.removeChild(b); // 
const img = document.querySelector('img');
img.remove();

