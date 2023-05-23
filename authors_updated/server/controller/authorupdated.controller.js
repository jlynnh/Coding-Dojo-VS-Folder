const { response } = require('express');
const Author = require('../models/authorupdated.models');

module.exports.index = (request, response) => {
    response.json({
        message: "New Author"
    });
}
module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.status(200).json({ Author: allAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneSingleAuthor = (req, res) => {
    console.log(req.params)
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.status(200).json({ Author: oneSingleAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.createNewAuthor = (req, res) => {
    console.log("Create New Authors req.body" , req.body)  // checking my data flow from front end to backend 
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.status(200).json({ Author: newlyCreatedAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.updateExistingAuthor = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    Author.updateOne(
        { _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
            )
        .then(updatedAuthor => {
            res.status(200).json({ Author: updatedAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
