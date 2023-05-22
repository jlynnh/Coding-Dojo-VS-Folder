const { response } = require('express');
const Store = require('../models/store.models');

module.exports.index = (request, response) => {
    response.json({
        message: "New Store"
    });
}
module.exports.findAllStores = (req, res) => {
    Store.find()
        .then((allStores) => {
            res.status(200).json( {Store: allStores} )
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findAllStores controller', error: err })
        });
}
module.exports.findOneSingleStore = (req, res) => {
    console.log(req.params)
    Store.findOne({ _id: req.params.id })
        .then(oneSingleStore => {
            res.status(200).json({ Store: oneSingleStore })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in findOneSingleStore controller', error: err })
        });}
module.exports.createNewStore = (req, res) => {
    console.log("Create New Stores req.body" , req.body)   
    Store.create(req.body)
        .then(newlyCreatedStore => {
            res.status(200).json({ Store: newlyCreatedStore })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in createNewStore controller', error: err })
        });}
module.exports.updateExistingStore = (req, res) => {
    console.log("Update Existing Stores req.body" ,req.body)
    console.log(req.params)
    Store.updateOne(
        { _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
            )
        .then(updatedStore => {
            res.status(200).json({ Store: updatedStore })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in updateExistingStore controller', error: err })
        });}
module.exports.deleteAnExistingStore = (req, res) => {
    Store.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong in deleteAnExistingStore controller', error: err })
        });}
