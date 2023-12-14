const express = require('express');
const router = express.Router();

const Seller = require('../Model/SellerSchema');

router.put('/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.body;
    console.log(email);
    console.log(password);
    const result = await Seller.findOne({ email });
    if (!result) {
      return res.status(404).json({ Status: "User not found." });
    }

    result.password = password;
    await result.save();

    res.status(200).json({ Status: "Success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ Status: "An error occurred." });
  }
});



module.exports = router