const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
    .then(() => {
        console.log('Connection Open!!!');
    })
    .catch(err => {
        console.log('Oh No Error!!');
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2021, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log('It worked!');
//         console.log(data);
//     })

// Movie.find({}).then(data => {
//     for (let d in data) {
//         console.log(data[d].title)
//     }
// });

// Movie.find({ year: { $gte: 2015 } }).then(data => console.log(data));

// Movie.findOne({}).then(m => console.log(m));

// Movie.findById({ _id: '615b95a988dd92df57cfaec1' }).then(m => console.log(m));

// Movie.findById('615b95a988dd92df57cfaec0').then(m => console.log(m));

// Movie.updateOne({ title: 'Amadeus' }, { year: 1984 }).then(res => console.log(res));

// Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 }).then(res => console.log(res));

// Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.0 }).then(m => console.log(m)); // show the older data prior to update

// Movie.findOneAndUpdate({ title: 'The Iron Giant' }, { score: 7.8 }, { new: true }).then(m => console.log(m)); // shows the new data after update

Movie.remove({ title: 'Amelie' }).then(msg => console.log(msg));

Movie.deleteMany({ year: { $gte: 1999 } }).then(msg => console.log(msg));

Movie.findOneAndDelete({ title: 'Alien' }).then(m => console.log(m));
