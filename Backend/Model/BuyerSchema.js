const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: false
    },
    district: {
        type: String,
        required: false
    },
    division: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String 
    }
});

const Buyer = mongoose.model("BUYER", buyerSchema);
module.exports = Buyer;
