const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../cloudinary');


const Buyer = require('../Model/BuyerSchema');

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage: storage });

router.post('/:buyerId', upload.single('img'), async (req, res) => {
  try {
    const { buyerId } = req.params;

    const result = await Buyer.findById(buyerId);
    if (!result) {
      return res.status(404).json({ error: 'User not found' });
    }
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    console.log(req.file.path);
    const imgPath = req.file.path;
    
    async function run(img) {
      try {
        const response = await cloudinary.uploader.upload(img);
        return response.url;
      } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        return null;
      }
    }

    try {
      const cloudinaryUrl = await run(imgPath);
      if (!cloudinaryUrl) {
        return res.status(500).json({ error: 'Error uploading to Cloudinary' });
      }

      console.log(cloudinaryUrl);
      result.img = cloudinaryUrl;

      await result.save();

      console.log(result);

      res.json({ success: true });
    } catch (error) {
      console.error('Error handling image upload:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } catch (error) {
    console.error('Error handling image upload:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


        // .then((imgPath)=>{
        //   console.log(imgPath)
        //   result.img=imgPath;
        //   console.log(result);
          
        // })
        // .catch((err)=>{
        //   console.log(err)
        // })

    //     await result.save();
    //     console.log(result);
    //     res.json({ success: true });
    // }
    // catch (error) {
    //   console.error('Error handling image upload:', error);
    //   res.status(500).json({ error: 'Internal server error' });
    // }
  // });

module.exports = router;