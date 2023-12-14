const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const Seller = require('../Model/SellerSchema');

router.post('/', async (req, res) => {
  try {
    // const { email } = req.params;
    const { email } = req.body;
    console.log(email);
    // console.log(password);
    const result = await Seller.findOne({ email });
    if (!result) {
      return res.status(404).json({ Status: "User not found." });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      auth: {
          user: 'sdpproject74@gmail.com',
          pass: 'qyva gdbc jkoa srdj',
      }
  });
  const random = Math.floor(Math.random() * 10001);
  const info = await transporter.sendMail({
      from: "sdp_project74@gmail.com", // sender address
      to: email, // list of receivers
      subject: "User Authentication Code from Heritage Craft Connect✔", // Subject line
      text: `Your Registration Code is ${random}`, // plain text body

  });
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  console.log("Random Value: ", random); 

  res.status(200).json({ data: random, Status: "Success" }); 
  // res.status(200).json({ data: random });

  // res.status(200).json({ Status: "Success" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ Status: "Email could not be sent." });
  }
});



module.exports = router