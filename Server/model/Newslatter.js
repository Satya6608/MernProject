const mongoose = require("mongoose")

var NewslatterShema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email Must Required!!!"],
        unique:true
    }
})
var Newslatter = mongoose.model("Newslatter",NewslatterShema)

module.exports = Newslatter