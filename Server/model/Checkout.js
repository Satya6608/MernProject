const mongoose = require("mongoose")

var CheckoutShema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true, "User Id Must Required!!!"]
    },
    paymentmode: {
        type: String,
        default: "COD"
    },
    paymentstatus: {
        type: String,
        default: "Pending"
    },
    orderstatus: {
        type: String,
        default: "Order is Placed"
    },
    subtotal: {
        type: Number,
        required: [true, "Subtotal Must Required!!"]
    },
    shipping: {
        type: Number,
        required: [true, "Shipping Must Required!!"]
    },
    total: {
        type: Number,
        required: [true, "Total Must Required!!"]
    },
    rppid: {
        type: String,
        default: ""
    },
    date: {
        type: String,
        default: ""
    },
    products: [
        {
            productid: {
                type: String,
                required: [true, "Product Id Must Required!!!"]
            },
            name: {
                type: String,
                required: [true, "Product Name Must Required!!!"]
            },
            brand: {
                type: String,
                required: [true, "Product Brand Must Required!!!"]
            },
            color: {
                type: String,
                required: [true, "Product Color Must Required!!!"]
            },
            size: {
                type: String,
                required: [true, "Product Size Must Required!!!"]
            },
            price: {
                type: Number,
                required: [true, "Product Price Must Required!!!"]
            },
            qty: {
                type: Number,
                required: [true, "Product Qty Must Required!!!"]
            },
            total: {
                type: Number,
                required: [true, "Product Total Must Required!!!"]
            },
            pic: {
                type: String
            }
        }
    ]
})
var Checkout = mongoose.model("Checkout", CheckoutShema)

module.exports = Checkout