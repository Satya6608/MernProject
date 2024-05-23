const mongoose = require("mongoose")

var ProductShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Product Name Must Required!!!"]
    },
    maincategory:{
        type:String,
        required:[true,"Product Maincategory Must Required!!!"]
    },
    subcategory:{
        type:String,
        required:[true,"Product Subcategory Must Required!!!"]
    },
    brand:{
        type:String,
        required:[true,"Product Brand Must Required!!!"]
    },
    color:{
        type:String,
        required:[true,"Product Color Must Required!!!"]
    },
    size:{
        type:String,
        required:[true,"Product Size Must Required!!!"]
    },
    baseprice:{
        type:Number,
        required:[true,"ProductBase Price Must Required!!!"]
    },
    discount:{
        type:Number,
        required:[true,"Product Discount Must Required!!!"]
    },
    finalprice:{
        type:Number,
        required:[true,"Product Finalprice Must Required!!!"]
    },
    stock:{
        type:String,
        default:"In Stock"
    },
    description:{
        type:String,
        default:"This is Sample Product"
    },
    pic1:{
        type:String,
        default:""
    },
    pic2:{
        type:String,
        default:""
    },
    pic3:{
        type:String,
        default:""
    },
    pic4:{
        type:String,
        default:""
    }
})
var Product = mongoose.model("Product",ProductShema)

module.exports = Product