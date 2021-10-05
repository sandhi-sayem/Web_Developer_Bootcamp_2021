const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection Open!!!');
    })
    .catch(err => {
        console.log('Oh No Error!!');
        console.log(err);
    });

const personSchema = new mongoose.Schema({
    first: String,
    last: String
});

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

// personSchema.pre('save', async function () {
//     console.log('About to save!!');
// })

personSchema.post('save', async function () {
    console.log('Just saved!!');
})

// const k = new Person({ first: 'Kristen', last: 'Sun' });
// k.save();

personSchema.pre('save', async function () {
    this.first = 'Trol';
    this.last = 'ling';
    console.log('Just saved!!');
})

const Person = mongoose.model('Person', personSchema);

const colt = new Person({ first: 'Colt', last: 'Steele' });
colt.save().then(p => console.log(p));

// const tammy = new Person({ first: 'Tammy', last: 'Chow' });

// tammy.save();

// console.log(tammy);
// console.log(tammy.fullName);
