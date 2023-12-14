const express = require('express');
const router = express.Router();

const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');
const Seller = require('../Model/SellerSchema')

router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;
    // Find and populate the orders
    //console.log(`in count customer, The id of seller is ${id}`);
    const orders = await Order
      .find({ sellerId: id })
      .populate('product.productId')
      .exec();

    if (!orders) {
      console.log("No results found.");
      return res.status(404).json({ message: "No results found." });
    }
    console.log(orders);
    // Create an object to store unique buyer names and the number of orders
    const buyerOrderCount = {};
    const count=0;
    for (const order of orders) {
      const buyer = await Buyer.findById(order.buyerId).exec();
      const buyerName = buyer.name; // Assuming the name property exists in the buyer model
      if (!buyerOrderCount[buyerName]) {
        
        buyerOrderCount[buyerName] = 1;
      } else {
        
        buyerOrderCount[buyerName]++;
      }
    }

    // Convert the object into an array of objects for response
    const uniqueBuyers = Object.keys(buyerOrderCount).map((buyerName) => ({
      buyerName,
      orderCount: buyerOrderCount[buyerName],
    }));

    // Sort the uniqueBuyers array by orderCount in descending order
    uniqueBuyers.sort((a, b) => b.orderCount - a.orderCount);

    // Get the top 5 buyers
    const topBuyers = uniqueBuyers.slice(0, 5);

    res.json(buyerOrderCount);
  } catch (error) {
    console.error(`Error while fetching products: ${error}`);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router