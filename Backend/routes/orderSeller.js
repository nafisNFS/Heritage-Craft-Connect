const express = require('express');
const router = express.Router();

const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');
const Seller = require('../Model/SellerSchema');
const Products = require('../Model/ProductsSchema')

 /*
      console.log("Orders:", JSON.stringify(orders.map(order => ({
        productId: order.product[0]?.productId,
        sellerId: order.product[0]?.productId?.seller,
        buyerId: order.buyerId,
        quantity: order.product[0]?.quantity 
      }), null, 2)));

    console.log(
      await Promise.all(
        orders.map(async (order, index) => {
          const user = await Buyer.findById(order.buyerId).exec();
          return {
            buyerId: order.buyerId,
            productName: order.product[index].productId.productName,
            quantity: order.product[index].quantity,
            price: order.product[index].productId.price,
            Date: order.date,
            Buyer: user
          };
        })
      )
    );
      
    */

    router.get('/:id', async (req, res) => {
      try {
        const id = req.params.id;
        console.log(`in order seller, The id of seller is ${id}`);
        const orders = await Order
          .find({ sellerId: id })
          .populate('product.productId')
          .sort({ Date: -1 })
          .limit(7)  
          .exec();
    
        console.log(orders);
        res.json(
          await Promise.all(
            orders.map(async (order) => {
              const product = await Products.findById(order.product[0]?.productId).exec();
              console.log("Product ID: " + order.product[0]?.productId);
              const buyer = await Buyer.findById(order.buyerId).exec();
              const seller = await Seller.findById(order.sellerId).exec();
              return {
                buyerId: order.buyerId,
                productName: order.product[0]?.productId.productName,
                quantity: order.product[0]?.quantity,
                price: order.product[0]?.productId.price,
                Date: order.date,
                Buyer: buyer,
                Seller: seller
              };
            })
          )
        );
      } catch (error) {
        console.error("ERROR: " + error);
        res.status(500).json({ error: "Error retrieving orders" });
      }
    });
    

module.exports = router