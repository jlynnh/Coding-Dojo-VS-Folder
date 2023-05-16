const mongoose = require('mongoose'); 
const ProductController = require('../controller/product.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new product"})
    })
}

module.exports = (app) => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneSingleProduct);
    app.put('/api/products/:id', ProductController.updateExistingProduct);
    app.post('/api/products', ProductController.createNewProduct);
    app.delete('/api/products/:id', ProductController.deleteAnExistingProduct);
}
