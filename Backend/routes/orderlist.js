const express = require('express');
const router = express.Router();

const Order = require('../Model/OrderSchema');

// Define a route to fetch orders based on seller ID
router.get('/:sellerId', async (req, res) => {
  const { sellerId } = req.params;

  try {
    // Fetch orders where sellerId matches
    const orders = await Order.find({ sellerId })
    .populate('buyerId', 'name email mobileNumber area district division')
    .populate('product.productId', 'productName Product_img1 price'); // Assuming you have a Product model with 'productName'
    // console.log(orders);
    // console.log(orders.product);
    // orders.forEach(order => {
    //     console.log("Order ID:", order._id);
    //     console.log("Buyer:", order.buyerId);
    //     console.log("Product Information:");
        
    //     order.product.forEach(productItem => {
    //       console.log("Product ID:", productItem.productId._id);
    //       console.log("Product Name:", productItem.productId.productName);
    //       console.log("Product Name:", productItem.productId.price);
    //       console.log("Product Quantity:", productItem.quantity);
    //       console.log("Product Image:", productItem.productId.Product_img1);
          
    //     });
        
    //     console.log("Total Price:", order.totalPrice);
    //     console.log("Order Status:", order.orderStatus);
    //     console.log("-----");
    // });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router