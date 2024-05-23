const mongoose = require("mongoose")

var SubcategoryShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Subcategory Name Must Required!!!"],
        unique:true
    }
})
var Subcategory = mongoose.model("Subcategory",SubcategoryShema)

module.exports = Subcategory