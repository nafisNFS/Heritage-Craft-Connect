const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    product: [{
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products'
        },
        quantity: {
            type: Number,
            required: true
        }
    }],
    buyerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BUYER'
    },
    sellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SELLER'
    },
    date: {
        type: Date,
        required: true // Modified to be required
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        default: 'not ordered',
        enum: ['not ordered', 'cart', 'pending', 'ordered']
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
