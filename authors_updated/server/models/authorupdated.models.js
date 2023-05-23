const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;