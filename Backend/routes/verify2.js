const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/:email', async (req, res) => {
    const { email } = req.params;
    console.log(email);
    try {
        let testAccount = await nodemailer.createTestAccount();

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
        // console.log(random);
        console.log("Random Value: ", random); 
        res.status(200).json({ data: random });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Email could not be sent." });
    }
});

module.exports = router