const express = require('express');
const router = express.Router();


const Product = require('../Model/ProductsSchema');


router.post('/:productId', async (req, res) => {
    const { productId } = req.params;
    console.log(productId);
    const { updateAmount, operation } = req.body;
    console.log(updateAmount);
    try{
        const product = await Product.findById(productId);
        console.log(product)

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    if (operation === 'add') {
        console.log(product.storedQuantity);
        product.storedQuantity += updateAmount;
        console.log(product.storedQuantity);
    } else if (operation === 'delete') {
        if (product.storedQuantity - updateAmount < 0) {
            return res.status(400).json({ error: 'Cannot delete more than available quantity' });
            // return res.status(400);
        }
        product.storedQuantity -= updateAmount;
    } else {
        return res.status(400).json({ error: 'Invalid operation' });
    }

    await product.save();
    console.log(product);
    res.json({ message: `Product quantity updated for ${productId}`, updatedProduct: product });
    
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    
});

module.exports = router