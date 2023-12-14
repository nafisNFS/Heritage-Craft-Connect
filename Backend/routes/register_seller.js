const express = require('express');
const router = express.Router();
const Seller = require('../Model/SellerSchema');
const multer = require('multer'); 
const path = require('path');
const cloudinary = require('../cloudinary');

const storage = multer.diskStorage({
  /*
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); 
  },
  */
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});


const upload = multer({ storage: storage });

router.post('/', upload.single('img'), async (req, res) => {
  try {
    const userData = req.body;
    const existingUser = await Seller.findOne({ email: userData.email });
    //console.log(existingUser)
    if (!userData.name || !userData.email || !userData.password) {
      return res.status(400).json({ error: 'Incomplete user data' });
    } else if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    } else {
      // Check if 'req.file' exists to determine if the user uploaded an image
      const imgPath = req.file ? req.file.path : './images/gettyimages-1065743784-2048x2048.jpg';
      async function run(img) {
        try {
          const response = await cloudinary.uploader.upload(img);
          return response.url;
        } catch (error) {
          console.error('Error uploading to Cloudinary:', error);
          return null;
        }
      }
      run(imgPath)
      .then((imgPath)=>{
        console.log(imgPath)
        const newUser = new Seller({
          ...userData,
          img: imgPath,
        });
        const user = newUser.save();
        res.status(201).json(user);
      })
      .catch((err)=>{
        res.status(500).send(err)
      })

      
      
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error saving user');
  }
});

module.exports = router;
