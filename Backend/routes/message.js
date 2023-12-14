const express = require('express');
const http = require('http')
//const {Server} = require('socket.io')
const cors = require('cors')
const router = express.Router();
const app=express()
app.use(cors())
const Message = require('../Model/MessageSchema');
const Conversation = require('../Model/ConversationSchema');
const Seller = require('../Model/SellerSchema');
const Buyer = require('../Model/BuyerSchema');
const io= require('socket.io')(8080,{
    cors: {
        origin: 'http://localhost:5173',
    }
});
let users = []
io.on("connection",(socket) =>{
    console.log('User Connected ',socket.id)
    socket.on('addUser',userId =>{
        const isUserExist = users.find(user => user.userId === userId);
        if (!isUserExist) {
            const user = {userId,socketId: socket.id};
            users.push(user)
            io.emit('getUsers', users);
            console.log(user)
        }
        console.log(users)
        
    });
    socket.on('sendMessage',({senderId,receiverId,message,conversationId})=>{
        
        const receiver = users.find(user => user.userId === receiverId);
        const sender = users.find(user => user.userId === senderId);
        console.log("SENDER",sender);
        console.log("Receiver",receiver);
        if (receiver) {
            io.to(receiver.socketId).to(sender.socketId).emit('getMessage',{
                senderId,
                message,
                conversationId,
                receiverId
            });
        }
        else if(sender) {
            io.to(sender.socketId).emit('getMessage',{
                senderId,
                message,
                conversationId,
                receiverId
            });
        }
    });
    socket.on('sendMessage_seller',({senderId,receiverId,message,conversationId})=>{
        
        const receiver = users.find(user => user.userId === receiverId);
        const sender = users.find(user => user.userId === senderId);
        console.log("SENDER",sender);
        console.log("Receiver",receiver);
        if (receiver) {
            io.to(receiver.socketId).to(sender.socketId).emit('getMessage_seller',{
                senderId,
                message,
                conversationId,
                receiverId
            });
        }
        else if(sender) {
            io.to(sender.socketId).emit('getMessage_seller',{
                senderId,
                message,
                conversationId,
                receiverId
            });
        }
        
    });
    socket.on('disconnect',()=>{
        users = users.filter(user => user.socketId !== socket.id);
        io.emit('getUsers',users);
    })
})

router.post('/',async (req,res)=>{
    try {
        //console.log(req.body)
        const {conversationId,senderId,message} = req.body;
        const date_T = new Date();
        const newMessage = new Message({conversationId,senderId,message:message,date:date_T});
        await newMessage.save();
        res.send("Message sent successfully");
    } catch (error) {
        console.log(error,"Error")
    }
})

router.get('/:id',async (req,res)=>{
    try {
        const userId = req.params.id;
        
        if(!userId) return res.status(200).send('Conversation Id is required')
        const Conversation = await Message.find({conversationId:userId});
        //console.log(Conversation)
        const messageData = Promise.all(Conversation.map(async (message) =>{
            const seller = await Seller.findById(message.senderId)
            const buyer = await Buyer.findById(message.senderId)
            if(seller) {
                return { user: {email: seller.email,name:seller.name,tag:"seller"},message:message.message  }
            }
            else {
                return { user: {email: buyer.email,name:buyer.name,tag:"buyer"},message:message.message  }
            }
            
        }))

        res.send(await messageData);
    } catch (error) {
        console.log(error,"Error")
    }
})

router.post('/conversation', async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;
        const check = await Conversation.find({ members: [senderId, receiverId] });

        if (check.length > 0) {
            res.status(409).send('Conversation already exists');
        } else {
            const newConversation = new Conversation({ members: [senderId, receiverId] });
            await newConversation.save();
            res.status(201).send('Conversation created successfully');
        }
    } catch (error) {
        console.error(`Error while posting conversation\n ${error}`);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/conversation/:id', async (req, res) => {//id holo buyer er
    try {
        const userId = req.params.id;
        
        const conversation = await Conversation.find({members:{$in: [userId] } });
        //console.log(conversation)
        const conversationUserData = Promise.all(conversation.map(async (conversation) => {
            const receiverId = await conversation.members.find((member) => member !== userId);
            const user= await Seller.findById(receiverId);
            return {
                user:{id:user.id,email:user.email,fullName:user.name, image:user.img},
                conversationId: conversation._id
            }
        }))
        res.json(await conversationUserData)
    } catch (error) {
        console.log(`Error while getting conversation\n ${error}`)
    }
});
router.get('/conversation_seller/:id', async (req, res) => {//id holo Seller er
    try {
        const userId = req.params.id;
        
        const conversation = await Conversation.find({members:{$in: [userId] } });
        //console.log(conversation)
        const conversationUserData = Promise.all(conversation.map(async (conversation) => {
            const receiverId = await conversation.members.find((member) => member !== userId);
            const user= await Buyer.findById(receiverId);
            return {
                user:{id:user.id,email:user.email,fullName:user.name, image:user.img},
                conversationId: conversation._id
            }
        }))
        res.json(await conversationUserData)
    } catch (error) {
        console.log(`Error while getting conversation\n ${error}`)
    }
});
module.exports = router;