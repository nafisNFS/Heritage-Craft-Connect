const express = require('express');
const router = express.Router();

const Buyer = require('../Model/BuyerSchema');


router.get('/:id', async (req, res) => {
    try {
        //const id = "651adc5c7bea3ef7b5ff632f";
        const id= req.params.id;
        const result = await Buyer.findById(id);
        res.json(result);
    } catch (error) {
        console.log(`Error while fetching buyer\n ${error}`)
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params; 
    
    const newData = req.body;
  
    try {
      // const id = "651adc5c7bea3ef7b5ff632f";
      // const newData = req.body;
      const result = await Buyer.findByIdAndUpdate(id, newData, { new: true });
      
      if (!result) {
        return res.status(404).json({ error: 'Buyer not found' });
      }
  
      res.json(result);
    } catch (error) {
      console.log(`Error while updating buyer: ${error}`);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = router