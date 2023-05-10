const jokesController = require('../controllers/jokes.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new jokes"})
    })
}

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findOneSingleJoke);
    app.patch('/api/jokes/:id', JokesController.updateExistingJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.delete('/api/jokes/:id', JokesController.deleteAnExistingJoke);
    app.get('/api/jokes/random', jokesController.findOneSingleJoke);
}
