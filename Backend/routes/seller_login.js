const express = require('express');
const router = express.Router();

const Seller = require('../Model/SellerSchema');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Seller.findOne({ email, password });

        if (user) {
            // User is found, and the credentials match
            res.status(200).json({ success: true, message: 'Login successful', id: user.id });
        } else {
            // User not found or incorrect credentials
            res.status(401).json({ success: false, message: 'Login failed' });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

module.exports = router