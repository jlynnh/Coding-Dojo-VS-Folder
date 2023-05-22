const mongoose = require('mongoose'); 
const StoreController = require('../controller/store.controller');

const routes = (app) => {
    app.get("/api",(req,res) => {
        res.json({msg: "new store"})
    })
}

module.exports = (app) => {
    app.get('/api/stores', StoreController.findAllStores);
    app.get('/api/stores/:id', StoreController.findOneSingleStore);
    app.put('/api/stores/:id', StoreController.updateExistingStore);
    app.post('/api/stores', StoreController.createNewStore);
    app.delete('/api/stores/:id', StoreController.deleteAnExistingStore);
}