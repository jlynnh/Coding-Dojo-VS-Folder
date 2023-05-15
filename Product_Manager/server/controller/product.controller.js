const { response } = require('express');
const Product = require('../models/product.models');

module.exports.index = (request, response) => {
    response.json({
        message: "New Product"
    });
}
module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.status(200).json({ Product: allProducts })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });
}
module.exports.findOneSingleProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneSingleProduct => {
            res.status(200).json({ Product: oneSingleProduct })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.createNewProduct = (req, res) => {
    console.log("Create New Products req.body" , req.body)  // checking my data flow from front end to backend 
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.status(200).json({ Product: newlyCreatedProduct })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.updateExistingProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
            req.body,
        { new: true, runValidators: true }
            )
        .then(updatedProduct => {
            res.status(200).json({ Product: updatedUser })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
module.exports.deleteAnExistingProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ result: result })
        })
        .catch((err) => {
            res.status(400).json({ message: 'Something went wrong', error: err })
        });}
