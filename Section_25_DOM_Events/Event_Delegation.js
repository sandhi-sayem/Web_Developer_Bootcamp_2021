const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
// const allLis = document.querySelectorAll('li');

// for (let li of allLis) {
//     li.addEventListener('click', function () {
//         this.remove(); // this will only work for 'li' that were at the page when it loaded, will not work of 'li' that were added later on
//     })
// }

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`);
    // console.log(newTweet);
    tweetsContainer.append(newTweet);
};

tweetsContainer.addEventListener('click', function (e) {
    // console.log('Clicked on UL!');
    // console.log(e);
    e.target.nodeName === 'LI' && e.target.remove();
});