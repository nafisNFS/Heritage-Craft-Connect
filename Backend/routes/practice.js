const express = require('express');
const router = express.Router();
const axios = require('axios');
const cors = require('cors')
const app=express();
app.use(cors())
const Order = require('../Model/OrderSchema');
const Buyer = require('../Model/BuyerSchema');

router.get('/', async (req, res) => {
  try {
    // Make the request to the external API here
    const response = await axios.get("https://api-bd.idare.ai/api/external/experiment/74ffa84e-96ca-4e3d-904a-237de969c4eb/prediction/result/?format=json");
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data.' });
  }
});

module.exports = router