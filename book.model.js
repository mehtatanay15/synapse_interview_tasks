const mongoose = require('mongoose')
const bookschema = mongoose.Schema({
    name: String,
    id: String,
    genre: String,
    author: String,
    availability: Boolean, 
});

const Book = mongoose.model('Book', bookschema);

module.exports = Book;