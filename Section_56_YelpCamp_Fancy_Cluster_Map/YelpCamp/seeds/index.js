const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
const Review = require('../models/review');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    await Review.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            // YOUR USER ID
            author: '61676da23323d2cefb752a7c',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci vero sapiente nobis numquam incidunt aspernatur consectetur perferendis, obcaecati quidem accusantium ipsa. Quae labore sed possimus inventore doloremque dolores quis exercitationem.',
            price,
            geometry: { 
                type: "Point", 
                coordinates : [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/sandhi/image/upload/v1634384106/YelpCamp/hectlizs4cdcf84ari87.jpg',
                    filename: 'YelpCamp/hectlizs4cdcf84ari87'
                },
                {
                    url: 'https://res.cloudinary.com/sandhi/image/upload/v1634384106/YelpCamp/c7ic7ehkjsdf9gny2pmu.jpg',
                    filename: 'YelpCamp/c7ic7ehkjsdf9gny2pmu'
                }
            ]
        });
        await camp.save();
    }
};

seedDB().then(() => {
    // mongoose.connection.close();
    db.close();
});