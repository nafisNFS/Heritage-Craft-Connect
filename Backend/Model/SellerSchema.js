const mongoose= require('mongoose');

const sellerSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: false
    },
    district: {
        type: String,
        require: false
    },
    division: {
        type: String,
        require: false
    },
    password: {
        type: String,
        require: true
    },
    img: {
        type: String 
    }

})
const Seller = mongoose.model("SELLER",sellerSchema);
module.exports = Seller;