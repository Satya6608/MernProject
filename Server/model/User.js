const mongoose = require("mongoose")

var UserShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"User Full Name Must Required!!!"]
    },
    username:{
        type:String,
        required:[true,"User Name Must Required!!!"],
        unique:true
    },
    email:{
        type:String,
        required:[true,"Email Address Must Required!!!"]
    },
    phone:{
        type:String,
        required:[true,"Phone Number Must Required!!!"]
    },
    password:{
        type:String,
        required:[true,"Password Must Required!!!"]
    },
    addressline1:{
        type:String,
        default:""
    },
    addressline2:{
        type:String,
        default:""
    },
    addressline3:{
        type:String,
        default:""
    },
    pin:{
        type:String,
        default:""
    },
    city:{
        type:String,
        default:""
    },
    state:{
        type:String,
        default:""
    },
    pic:{
        type:String,
        default:""
    },
    role:{
        type:String,
        default:"User"
    },
    otp:{
        type:Number,
        default:"-121521"
    }
})
var User = mongoose.model("User",UserShema)

module.exports = User