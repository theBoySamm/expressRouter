const mongoose = require("mongoose")

// creating a schema
const fruitSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    rating: Number,
    review: String
});

// Creating a model
const Fruit = mongoose.model("Fruit", fruitSchema)

module.exports = Fruit