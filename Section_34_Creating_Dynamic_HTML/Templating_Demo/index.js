const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // appending views to the full path of index.js, so we can run it from other folders without errors

app.get('/', (req, res) => {
    // res.send('<h1>Hi</h1>');
    res.render('home'); // .ejs or views/ is not required since express knows about ejs and views folder is default for ejs files
})

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats });
});

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    // console.log(data);
    // res.render('subreddit', { subreddit });
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit });
    }
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num });
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!!`);
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})