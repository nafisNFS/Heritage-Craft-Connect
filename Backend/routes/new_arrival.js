const express = require('express');
const router = express.Router();

const Product = require('../Model/ProductsSchema'); // Replace with your actual product schema

// Fetch the top 10 latest added products
router.get('/', async (req, res) => {
  try {
    const latestProducts = await Product.find({})
      .sort({ _id: -1 }) 
      .limit(8);

    res.json(latestProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
