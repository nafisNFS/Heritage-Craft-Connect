const mongoose = require('mongoose')
const KnowNavSchema = new mongoose.Schema({
    SellerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SELLER"
    },
    Product_type: {
        type:String,
        require: true
    },
    Product_District: {
        type:String,
        require: true
    },
    Product_Division: {
        type:String,
        require: true
    },
    Artisan_Title: {
        type:String,
        require: true
    },
    Artisan_Description: {
        type:String,
        require: true
    },
    Artisan_History: {
        type:String,
        require: true
    },
    How_it_made: {
        type:String
    },
    Hero_img: {
        type: String
    },
    Making_img: {
        type: String
    },
    Front_img: {
        type: String
    },
});


const KnowNav = mongoose.model("KnowNav",KnowNavSchema);
module.exports = KnowNav;