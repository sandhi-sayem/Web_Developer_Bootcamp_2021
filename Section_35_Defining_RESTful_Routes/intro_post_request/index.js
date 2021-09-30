const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send('Get /tacos response');
})

app.post('/tacos', (req, res) => {
    // console.log(req.body);
    const { meat, qty } = req.body;
    // res.send('POST /tacos response');
    res.send(`OK, here are your ${qty} ${meat} tacos!`);
})

app.listen(3000, () => {
    console.log('On port 3000!');
})