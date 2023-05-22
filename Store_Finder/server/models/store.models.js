const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeName: { 
        type: String,
        required: [true, "Store name is required"],
        minlength: [3, "Store name must contain at least 3 characters"] 
    },
    storeNumber: { 
        type: Number,
        required: [true, "Store number is required and must be a number greater than 0"],
        min: [1, "Store number must be greater than 0 and a whole number"]
    },
    storeOpen: { type: Boolean }, 
}, { timestamps: true });

const Store = mongoose.model('Store', StoreSchema);

module.exports = Store;