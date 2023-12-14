const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const KnowNav = require('../Model/KnowNavSchema');
const multer = require('multer');
const cloudinary = require('../cloudinary');
const ObjectId = mongoose.Types.ObjectId;

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', upload.fields([
  { name: 'Hero_img', maxCount: 1 },
  { name: 'Making', maxCount: 1 },
  { name: 'Front', maxCount: 1 },
]), async (req, res) => {
  try {
    const { SellerId,Product_Type, Product_District, Product_Division, Artisan_Title, Artisan_Description, Artisan_History, How_it_made } = req.body;

    const heroImg = req.files['Hero_img'][0];
    const makingImg = req.files['Making'][0];
    const frontImg = req.files['Front'][0];

    let Hero_url, Making_url, Front_url;

    async function run(img) {
      try {
        const response = await cloudinary.uploader.upload(img);
        return response.url;
      } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return null;
      }
    }

    Promise.all([run(heroImg.path), run(makingImg.path), run(frontImg.path)])
      .then((results) => {
        Hero_url = results[0];
        Making_url = results[1];
        Front_url = results[2];

        const newKnowNav = new KnowNav({
          SellerId: new ObjectId(SellerId),
          Product_Type,
          Product_District,
          Product_Division,
          Artisan_Title,
          Artisan_Description,
          Artisan_History,
          How_it_made,
          Hero_img: Hero_url,
          Making_img: Making_url,
          Front_img: Front_url,
        });

        console.log(newKnowNav);

        return newKnowNav.save();
      })
      .then(() => {
          console.log('Data saved successfully');
      })
      .catch((error) => {
          console.error('Error:', error);
      });

    res.status(200).json({ message: 'Data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
