const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require('./AppError');

// app.use(morgan('tiny'));
app.use(morgan('dev'));
// app.use(morgan('common'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
});

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs!');
    return next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        return next();
    }
    // res.send('Sorry, you need a password!!');
    // res.status(401);
    // throw new Error('Password required!');
    throw new AppError('Password required!', 401);
};

// app.use((req, res, next) => {
//     console.log('This is my first middleware!!!');
//     return next();
//     console.log('This is my first middleware - after calling next()');
// });

// app.use((req, res, next) => {
//     console.log('This is my second middleware!!!');
//     return next();
// });

app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Home Page!');
});

app.get('/error', (req, res) => {
    chicken.fly();
});

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`);
    res.send('Woof Woof!');
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send(`My secret is: sometimes I wear headphones in public so I don't have to talk to anyone.`);
});

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403);
});

app.use((req, res) => {
    res.status(404).send('NOT FOUND!');
});

// app.use((err, req, res, next) => {
//     console.log('***************************');
//     console.log('**********ERROR**********');
//     console.log('***************************');
//     console.log(err);
//     // res.status(500).send('We got an error!!!');
//     next(err);
// });

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong!' } = err;
    res.status(status).send(message);
});

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});