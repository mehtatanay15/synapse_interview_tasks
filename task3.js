const express = require('express');
const mongoose = require('mongoose');
const Book = require('./book.model');
const app = express();

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://mehtatanay04:tanaymehta15@synapse.wwdu1cz.mongodb.net/Synapse?retryWrites=true&w=majority&appName=Synapse')
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

// Middleware
app.use(express.json());

// Create a book
app.post('/book', async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all books
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a book
app.put('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by author
app.get('/books/author/:author', async (req, res) => {
    try {
        const books = await Book.find({ author: req.params.author });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get books by genre
app.get('/books/genre/:genre', async (req, res) => {
    try {
        const books = await Book.find({ genre: req.params.genre });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
