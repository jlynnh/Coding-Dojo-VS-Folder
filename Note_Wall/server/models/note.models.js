const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle: { 
        type: String,
        required: [true, "Note title is required"],
        minlength: [2, "Note title must contain at least 2 characters"] 
    },
    noteBody: { 
        type: String,
        required: [true, "Note body is required"],
        maxlength: [255, "Note body must contain a max of 255 characters"]
    },

}, { timestamps: true });

const Note = mongoose.model('Note', NoteSchema);

module.exports = Note;