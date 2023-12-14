const express = require('express');
const router = express.Router();

const Products = require('../Model/ProductsSchema');
const Sell = require('../Model/SellsSchema');

router.get('/:id', async(req, res)=>{
    try {
        const id= req.params.id;
        const result = await Sell.find({sellerId: id});
        const productIds = result.map(record => record.productId);
        // console.log(`Products are ${result}`)
        const products = await Products.find({ _id: { $in: productIds } });
        // console.log(`seller added ${products}`)
        res.json(products)
    } catch (error) {
        console.log(`Error while fetching abcde products ${error}`)
    }
});

router.get('/:sellerId/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        console.log(id);
        const result = await Products.findById(id);
        console.log(`The singular product is ${result}`)
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching singular product\n ${error}`)
    }
})

module.exports = router