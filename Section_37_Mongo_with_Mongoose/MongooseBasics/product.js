const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connection Open!!!');
    })
    .catch(err => {
        console.log('Oh No Error!!');
        console.log(err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive number'] // default error message if price is less than 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

productSchema.methods.greet = function () {
    console.log('Hello! Hi! Howdy!');
    console.log(`- from ${this.name}`);
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);;
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

// const p = new Product({ name: 'bike bag', price: 10 });

// p.greet();

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Bike Helmet' });
    // foundProduct.greet();
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('Outdoors');
    console.log(foundProduct);
}

Product.fireSale().then(res => console.log(res));

// findProduct();

// const bike = new Product({ name: 'Mountain Bike', price: 599 });
// const bike = new Product({ name: 'Bike Helmet', price: 29.50, onSale: true });
// const bike = new Product({ name: 'Tires', price: 50.99, categories: ['cycling', 'safety'] });
// const bike = new Product({ name: 'Tire Pump', price: 19.50, categories: ['cycling'] });
// const bike = new Product({ name: 'Cycling Jersey', price: 18.50, categories: ['cycling'], size: 'xs' });
// bike.save()
//     .then(data => {
//         console.log('It worked');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Oh no error!');
//         console.log(err);
//         // console.log(err.errors.name.properties.message);
//     });


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -9.01 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('It worked');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Oh no error!');
//         console.log(err);
//         // console.log(err.errors.name.properties.message);
//     });