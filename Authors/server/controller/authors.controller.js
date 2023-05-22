const { response } = require('express');
const Authors = require ('../models/authors.models');

module.exports.index = (request, response) => {
    response.json({
        message: "New Authors"
    });
}
module.exports.findAllAuthors = (req, res) => {
    Authors.find()
        .then((allAuthors) => {
            res.status(200).json({ Authors: allAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneSingleAuthor = (req, res) => {
    console.log(req.params)
    Authors.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.status(200).json({ Authors: oneSingleAuthor })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.createNewAuthors = (req, res) => {
    console.log("Create New Authors req.body" , req.body) 
    Authors.create(req.body)
        .then(newlyCreatedAuthors => {
            res.status(200).json({ Authors: newlyCreatedAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.updateExistingAuthors = (req, res) => {
    console.log(req.body)
    console.log(req.params)
    Authors.updateOne(
        { _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
            )
        .then(updatedAuthors => {
            res.status(200).json({ Authors: updatedAuthors })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.deleteAnExistingAuthors = (req, res) => {
    Authors.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
