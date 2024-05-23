const mongoose = require("mongoose")

var ContactUsShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Must Required!!!"]
    },
    email:{
        type:String,
        required:[true,"Email Address Must Required!!!"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Must Required!!!"]
    },
    subject:{
        type:String,
        required:[true,"Subject Must Required!!!"]
    },
    message:{
        type:String,
        required:[true,"Message Must Required!!!"]
    },
    status:{
        type:String,
        default:"Active"
    },
    date:{
        type:String,
        default:""
    }
})
var ContactUs = mongoose.model("ContactUs",ContactUsShema)
module.exports = ContactUs