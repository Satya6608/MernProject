const mongoose = require("mongoose")

var CartShema = new mongoose.Schema({
    userid:{
        type:String,
        required:[true,"User Id Must Required!!!"]
    },
    productid:{
        type:String,
        required:[true,"Product Id Must Required!!!"]
    },
    name:{
        type:String,
        required:[true,"Product Name Must Required!!!"]
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
    price:{
        type:Number,
        required:[true,"Product Price Must Required!!!"]
    },
    qty:{
        type:Number,
        required:[true,"Product Qty Must Required!!!"]
    },
    total:{
        type:Number,
        required:[true,"Product Total Must Required!!!"]
    },
    pic:{
        type:String
    }
})
var Cart = mongoose.model("Cart",CartShema)

module.exports = Cart