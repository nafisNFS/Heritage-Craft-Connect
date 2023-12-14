const express = require('express');
const router = express.Router();

const Buyer = require('../Model/BuyerSchema');

router.post('/', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Buyer.findOne({ email, password });
        console.log(user.id);
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