const mongoose = require ('mongoose'); 
const NoteController = require('../controller/note.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new note"})
    })
}

module.exports = (app) => {
    app.get('/api/notes', NoteController.findAllNotes);
    app.get('/api/notes/:id', NoteController.findOneSingleNote);
    app.put('/api/notes/:id', NoteController.updateExistingNote);
    app.post('/api/notes', NoteController.createNewNote);
    app.delete('/api/notes/:id', NoteController.deleteAnExistingNote);
}