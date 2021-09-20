const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function (e) {

    e.preventDefault(); // prevents the form from submitting

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    // console.log(tweetForm.elements.username.value);
    // console.log(tweetForm.elements.tweet.value);
    // console.log(usernameInput.value, tweetInput.value);
    // console.log('Submit!');

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
    console.log(newTweet);
    tweetsContainer.append(newTweet);
};

