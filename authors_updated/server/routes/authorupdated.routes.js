const mongoose = require('mongoose'); 
const AuthorController = require('../controller/authorupdated.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new author"})
    })
}

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.get('/api/authors/:id', AuthorController.findOneSingleAuthor);
    app.put('/api/authors/:id', AuthorController.updateExistingAuthor);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.delete('/api/authors/:id', AuthorController.deleteAnExistingAuthor);
}
