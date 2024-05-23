const mongoose = require("mongoose")

var MaincategoryShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Maincategory Name Must Required!!!"],
        unique:true
    }
})
var Maincategory = mongoose.model("Maincategory",MaincategoryShema)

module.exports = Maincategory