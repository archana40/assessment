const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let productSchema = new Schema({
    prodName: {
        type: String
    },
    category: {
        type: String
    },
    company: {
        type: String
    },
    quantity: {
        type: String
    },
    price: {
        type: Number
    }
})

module.exports = mongoose.model('product', productSchema);






