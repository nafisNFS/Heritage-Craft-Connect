const express = require('express');
const router = express.Router();

const Products = require('../Model/ProductsSchema');
const Sells = require('../Model/SellsSchema')

router.get('/', async (req, res) => {
    try {
        // const filtering = req.query;
        const { category, district, division, rating, price, search, sort } = req.query; // Replace with your actual object

        // Clear district if division is empty
        const adjustedDistrict = division ? new RegExp(`^${district}$`, 'i') : '';

        const query = {
            ...(category ? { category: { $in: category.split(',').map(cat => new RegExp(`^${cat}$`, 'i')) } } : {}),
            ...(adjustedDistrict ? { district: adjustedDistrict } : {}),
            ...(division ? { division: new RegExp(`^${division}$`, 'i') } : {}),
            ...(rating ? { rating: { $in: rating.split(',') } } : {}),
            ...(price && price.gte && price.lte ? { price: { $gte: parseFloat(price.gte), $lte: parseFloat(price.lte)} } : {}),
            ...(
                search
                    ? {
                        $or: [
                            { productName: { $regex: search, $options: 'i' } },
                            { category: { $regex: search, $options: 'i' } },
                            { district: { $regex: search, $options: 'i' } },
                            { division: { $regex: search, $options: 'i' } },
                            // Add more fields as needed
                        ],
                    }
                    : {}
            ),
        };
        // console.log("Before formatting\n", req.query);
        // console.log("After formatting\n", query);
        // console.log(typeof query);
        // console.log(query.$or[0]);
        // console.log(sort);
        let sortBy = {};
        if(sort){
            const sortOrder = sort.startsWith('-') ? -1 : 1;
            const sortField = sort.replace(/^-/,'');
            sortBy[sortField] = sortOrder;
        } else{
            sortBy = {'productName': 1};
        }
        // console.log(sortBy);

        const result = await Products.find(query).sort(sortBy);
        // console.log(`Products are ${result}`);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching products ${error}`);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const result = await Products.findById(id);
        // console.log(`The singular product is ${result}`)
        const seller = await Sells.find({ productId: id }).populate('productId').populate('sellerId');
        // console.log('The seller awaae is ', seller);

        res.json(seller);
    } catch (error) {
        console.log(`Error while fetching singular product\n ${error}`)
    }
})

module.exports = router