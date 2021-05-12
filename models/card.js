const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    meaning: {
        type: String,
        required: true
    },
    reverse_meaning: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    reverse_image: {
        type: String,
        required: true
    }
}) 

const Card = mongoose.model('Card', cardSchema)
module.exports = Card;