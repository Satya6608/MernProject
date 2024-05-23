const mongoose = require("mongoose")

var BrandShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Brand Name Must Required!!!"],
        unique:true
    }
})
var Brand = mongoose.model("Brand",BrandShema)

module.exports = Brand