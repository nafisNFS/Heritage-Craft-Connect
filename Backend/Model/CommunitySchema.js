const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
    
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
    likes: {
        type: Number
    },
    date: {
        type: Date,
        required: true 
    },
    
    
});

const Community = mongoose.model("Community", communitySchema);
module.exports = Community;
