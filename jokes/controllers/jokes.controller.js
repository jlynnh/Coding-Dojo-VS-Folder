const Joke = require('../models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneSingleJoke = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(oneSingleUser => {
            res.json({ jokes: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ jokes: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

        module.exports.updateExistingJoke = (req, res) => {
            User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            )
                .then(updatedJoke => {
                    res.json({ jokes: updatedJoke })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}
         
        module.exports.deleteAnExistingJoke = (req, res) => {
            User.deleteOne({ _id: req.params.id })
                .then(result => {
                    res.json({ result: result })
                })
                .catch((err) => {
                    res.json({ message: 'Something went wrong', error: err })
                });}
