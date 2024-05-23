const mongoose = require("mongoose")

function getConnect(){
    try{
        mongoose.connect("mongodb://localhost:27017/myShop")
        // mongoose.connect(process.env.DBKEY)
        console.log("DataBase is Connected")
    }
    catch(error){
        console.log(error);
    }
}
getConnect()