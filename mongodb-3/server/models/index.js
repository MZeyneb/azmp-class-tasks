const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    title: String,
    author: String
});

const modelProduct = mongoose.model("products", productSchema)
module.exports = modelProduct