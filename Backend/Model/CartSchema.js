const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products' 
    },
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BUYER'
    },
    quantity: {
        type: Number,
        required: true
    }
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
