const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const Sells = require("../Model/SellsSchema");
const Seller = require("../Model/SellerSchema");
const Order = require("../Model/OrderSchema");
const Cart = require("../Model/CartSchema")
router.post("/", async (req, res) => {
    // console.log(req.body);
    const { _id, price, amount, buyerId } = req.body;
    try {
        // const sells = await Sells.find({ productId: _id });
        // const order1 = await Order.find({ sellerId: sells[0].sellerId, buyerId: buyerId, orderStatus: { $ne: 'ordered' } });
        // // console.log(order1[0]);
        // if (order1.length) {
        //     const productToUpdate = order1[0].product.find(item => item.productId === _id);
        //     if(productToUpdate){
        //         productToUpdate.quantity += parseFloat(amount);
        //     }
        //     else{
        //         order1[0].product.push({
        //             productId: new ObjectId(_id),
        //             quantity: parseFloat(amount)
        //         });
        //         order1[0].date = new Date();
        //         order1[0].totalPrice = parseFloat(price) * parseFloat(amount);
        //         order1[0].orderStatus = 'cart';
        //         const updatedData = await order1.save();
        //         // console.log(updatedData);
        //     }

        // }
        // else {
        //     // console.log("world");
        //     const order2 = new Order({
        //         product: [
        //             {
        //                 productId: new ObjectId(_id),
        //                 quantity: parseFloat(amount)
        //             }
        //         ],
        //         buyerId: new ObjectId(buyerId),
        //         sellerId: new ObjectId(sells[0].sellerId),
        //         date: new Date(),
        //         totalPrice: parseFloat(price) * parseFloat(amount),
        //         orderStatus: 'cart'
        //     });

        //     const savedData = await order2.save();
        //     // console.log(savedData);

        // }
        const cart1 = await Cart.find({buyerId: buyerId, productId: _id});
        if(!cart1.length){
            const cart = new Cart({
                productId: new ObjectId(_id),
                buyerId: new ObjectId(buyerId),
                quantity: amount
            })
            const data = await cart.save();
            res.json({message: 'Added to cart successfully'});
            // console.log(data);
        } else {
            res.json({message: 'Already added to cart'});
        }

    } catch (error) {
        console.log(error);
    }

});
module.exports = router;