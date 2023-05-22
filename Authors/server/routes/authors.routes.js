const mongoose = require('mongoose'); 
const AuthorsController = require('../controller/authors.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new author"})
    })
}

module.exports = (app) => {
    app.get('/api/authors', AuthorsController.findAllAuthors);
    app.get('/api/authors/:id', AuthorsController.findOneSingleAuthor);
    app.put('/api/authors/:id', AuthorsController.updateExistingAuthors);
    app.post('/api/authors', AuthorsController.createNewAuthors);
    app.delete('/api/authors/:id', AuthorsController.deleteAnExistingAuthors);
}