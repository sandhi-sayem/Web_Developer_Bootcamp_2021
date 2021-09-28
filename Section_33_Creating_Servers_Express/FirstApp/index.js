const express = require('express');
const app = express();

// console.dir(app);

// app.use((req, res) => {
//     console.log('We got a new request');
//     // res.send('Hello, we got your request! This is a response!');
//     // res.send({ color: 'red' });
//     res.send('<h1>This is my webpage!</h1>');
// })

// app.listen(3000, () => {
//     console.log('Listening on port 3000');
// })

// /cats => 'mewo'
// /dogs => 'woof'
// '/'


app.get('/', (req, res) => {
    res.send('<h1>Welcome to the home page!!!</h1>');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    // res.send('This is a subreddit!!');
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`);
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats!!');
})

app.get('/cats', (req, res) => {
    // console.log('Cat request!!');
    res.send('Meow!!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof!!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched');
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => { // to handle any other requests, make sure its all the way at the bottom otherwise it will trigger before the valid routes
    res.send(`I don't know that path!!`);
})

app.listen(8080, () => {
    console.log('Listening on port 8080');
})