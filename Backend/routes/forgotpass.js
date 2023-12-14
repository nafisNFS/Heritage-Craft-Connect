const express = require('express');
const router = express.Router();

const Buyer = require('../Model/BuyerSchema');

router.put('/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const { password } = req.body;
    console.log(email);
    console.log(password);
    const result = await Buyer.findOne({ email });
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