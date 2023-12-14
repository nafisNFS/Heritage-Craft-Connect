const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true // Corrected from "require" to "required"
    },
    price: {
        type: Number, // Corrected data type
        required: true
    },
    storedQuantity: {
        type: Number, // Corrected data type
        required: true
    },
    district: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true
    },
    size: {
        dimention: [{
            length: String,
            width: String,
            height: String,
            diameter: String
        }],
        other: {
            type: [String],
            default: null,
            enum: ["XXS", "XS", "S", "M", "L", "XXL", "XL","5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
        }
    },
    color: [String],
    Product_img1: {
        type: String
    },
    Product_img2: {
        type: String
    },
    Product_img3: {
        type: String
    },
});

const Products = mongoose.model("Products", productsSchema); // Corrected model name
module.exports = Products;
