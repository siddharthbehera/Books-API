const mongoose = require("mongoose")

const bookModel = mongoose.Schema(
    {
        bookTitle:{type: String, trim: true, require: true, unique: true},
        summary: {type: String, trim: true, minLength: 10},
        auther:{type: String, required: true}
    }
);

const Book = mongoose.model("Book", bookModel);

module.exports = Book;
