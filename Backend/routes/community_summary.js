const express = require('express');
const router = express.Router();

const Community = require('../Model/CommunitySchema');
const Buyer = require('../Model/BuyerSchema'); // Import your Buyer model
const Seller = require('../Model/SellerSchema');

// Fetch only 3 values from the Community collection
router.get('/', async (req, res) => {
  try {
    const id1= "6563d634ae1aa9132df09322";
    // const res1= await Community.findById(id1);

    const id2= "655ef404a32812ce0eee734e";
    // const res2= await Community.findById(id2);

    const id3= "655eed2aa32812ce0eee68f4";
    // const res3= await Community.findById(id3);

    const [result1, result2, result3] = await Promise.all([
      Community.findById(id1),
      Community.findById(id2),
      Community.findById(id3),
    ]);
    
    const mergedResults = [result1, result2, result3];
    
    res.json(mergedResults);

    // const communities = await Community.find().limit(3);

    // const communityData = await Promise.all(communities.map(async community => {
    //     const buyer = await Buyer.findById( community.senderId );
    //     const seller = await Seller.findById( community.senderId );
  
    //     return {
    //       community,
    //       userInfo: buyer || seller, 
    //     };
    //   }));
    // res.json(communityData);
    // console.log(communityData);
    // res.json(communities)
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router
