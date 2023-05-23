const { response } = require('express');
const Note = require('../models/note.models');

module.exports.index = (request, response) => {
    response.json({
        message: "New Note"
    });
}
module.exports.findAllNotes = (req, res) => {
    Note.find()
        .then((allNotes) => {
            res.status(200).json( {Note: allNotes} )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findAllNotes controller', error: err })
        });
}
module.exports.findOneSingleNote = (req, res) => {
    console.log(req.params)
    Note.findOne({ _id: req.params.id })
        .then(oneSingleNote => {
            res.status(200).json({ Note: oneSingleNote })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findOneSingleNote controller', error: err })
        });}
module.exports.createNewNote = (req, res) => {
    console.log("Create New Notes req.body" , req.body)   
    Note.create(req.body)
        .then(newlyCreatedNote => {
            res.status(200).json({ Note: newlyCreatedNote })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in createNewNote controller', error: err })
        });}
module.exports.updateExistingNote = (req, res) => {
    console.log("Update Existing Notes req.body" ,req.body)
    console.log(req.params)
    Note.updateOne(
        { _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
            )
        .then(updatedNote => {
            res.status(200).json({ Note: updatedNote })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in updateExistingNote controller', error: err })
        });}
module.exports.deleteAnExistingNote = (req, res) => {
    Note.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in deleteAnExistingNote controller', error: err })
        });}
