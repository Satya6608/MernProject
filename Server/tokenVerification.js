const jwt = require("jsonwebtoken")

function verifyToken(req,res,next){
    var token = req.headers.authorization
    jwt.verify(token,process.env.JWT_KEY_USER,(error)=>{
        if(error)
        res.status(401).send({result:"Fail",message:"You Are AunAuthorized to Access This Service!!!"})
        else
        next()
    })
}
function verifyTokenAdmin(req,res,next){
    var token = req.headers.authorization
    jwt.verify(token,process.env.JWT_KEY_ADMIN,(error)=>{
        if(error)
        res.status(401).send({result:"Fail",message:"You Are AunAuthorized to Access This Service!!!"})
        else
        next()
    })
}
module.exports = [verifyToken,verifyTokenAdmin]