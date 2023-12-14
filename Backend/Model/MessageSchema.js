const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    
    conversationId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    message: {
        type: String,
        required: true
    },
    attachment: {
        type: String,
        require: false
    },
    date: {
        type: Date,
        required: true 
    },
    
    
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
