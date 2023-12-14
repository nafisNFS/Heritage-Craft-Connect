const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
    buyerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'BUYER'
    },
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    },
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;
