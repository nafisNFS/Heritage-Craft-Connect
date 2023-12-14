const express = require('express');
const router = express.Router();

const Seller = require('../Model/SellerSchema');


router.get('/:id', async (req, res) => {
    const { id } = req.params; 
    
    try {
        // const id = "651adc5c7bea3ef7b5ff632f";
        const result = await Seller.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching Seller\n ${error}`)
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    
    const newData = req.body;
  
    try {
      // const id = "651adc5c7bea3ef7b5ff632f";
      // const newData = req.body;
      const result = await Seller.findByIdAndUpdate(id, newData, { new: true });
      
      if (!result) {
        return res.status(404).json({ error: 'Seller not found' });
      }
  
      res.json(result);
    } catch (error) {
      console.log(`Error while updating buyer: ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router