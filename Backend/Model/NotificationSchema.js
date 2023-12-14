const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    senderId: {
        type: String,
        required: true 
    },
    receiverId: {
        type: String,
        required: true 
    },
    notificationDescription: {
        type: String,
        required: true 
    },
    date: {
        type: Date,
        required: true 
    },
});

const Notifications = mongoose.model("Notifications", NotificationSchema);
module.exports = Notifications;
