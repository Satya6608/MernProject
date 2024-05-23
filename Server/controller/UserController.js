const express = require("express")
const passwordValidator = require("password-validator")
const bcrypt = require("bcrypt")
const multer = require("multer")
const jwt = require("jsonwebtoken")
const fs = require("fs")
const [verifyToken,verifyTokenAdmin] = require("../tokenVerification")

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.EMAILSENDER,
        pass: process.env.EMAILPASSWORD
    }
})


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/users')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage: storage })


var schema = new passwordValidator();

// Add properties to it
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(20)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Admin@123', 'User@123', 'Password123']);


const User = require("../model/User")

var router = express.Router()

router.get("/",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await User.find().sort({ _id: -1 })
        res.send({ result: "Done", count: data.length, data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", count: data.length, data: data })
        else
            res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/admin/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", count: data.length, data: data })
        else
            res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", async (req, res) => {
    if (schema.validate(req.body.password)) {
        var data = new User(req.body)
        bcrypt.hash(req.body.password, 12, async (error, hash) => {
            if (error)
                res.send({ result: "Fail", message: "Internal Server Error" })
            else {
                try {
                    data.password = hash
                    await data.save()
                    res.send({ result: "Done", message: "Record is Created!!!", data: data })
                }
                catch (error) {
                    if (error.keyValue)
                        res.status(400).send({ result: "Fail", message: "User Name Must Be Unique!!!" })
                    else if (error.errors.name)
                        res.status(400).send({ result: "Fail", message: error.errors.name.message })
                    else if (error.errors.email)
                        res.status(400).send({ result: "Fail", message: error.errors.email.message })
                    else if (error.errors.phone)
                        res.status(400).send({ result: "Fail", message: error.errors.phone.message })

                    else
                        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
                }
            }
        })
    }
    else
        res.send({ result: "Fail", message: "Invalid Password!!! It's Length must be min 8 and max 20 and it must contain atleast 1 digit,1 lower case character and 1 uppercase character!!!" })
})
router.put("/:_id",verifyToken, upload.single("pic"), async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.addressline1 = req.body.addressline1 ?? data.addressline1
            data.addressline2 = req.body.addressline2 ?? data.addressline2
            data.addressline3 = req.body.addressline3 ?? data.addressline3
            data.pin = req.body.pin ?? data.pin
            data.city = req.body.city ?? data.city
            data.state = req.body.state ?? data.state

            if (req.file) {
                try {
                    fs.unlinkSync("public/users/" + data.pic)
                } catch (error) { }
                data.pic = req.file.filename
            }

            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "User Name Must Be Unique!!!" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/admin/:_id",verifyTokenAdmin, upload.single("pic"), async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.addressline1 = req.body.addressline1 ?? data.addressline1
            data.addressline2 = req.body.addressline2 ?? data.addressline2
            data.addressline3 = req.body.addressline3 ?? data.addressline3
            data.pin = req.body.pin ?? data.pin
            data.city = req.body.city ?? data.city
            data.state = req.body.state ?? data.state

            if (req.file) {
                try {
                    fs.unlinkSync("public/users/" + data.pic)
                } catch (error) { }
                data.pic = req.file.filename
            }

            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "User Name Must Be Unique!!!" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            try {
                fs.unlinkSync("public/users/" + data.pic)
            } catch (error) { }
            await data.deleteOne()
            res.send({ result: "Done", message: "Record is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/login", async (req, res) => {
    try {
        var data = await User.findOne({ username: req.body.username })
        if (data) {
            if (await bcrypt.compare(req.body.password, data.password)){
                if(data.role==="Admin"){
                    jwt.sign({data},process.env.JWT_KEY_ADMIN,(error,token)=>{
                        if(error)
                        res.status(500).send({result:"Fail",message:"Internal Server Error!!!"})
                        else
                        res.send({ result: "Done", data: data,token:token })
                    })
                }
                else{
                    jwt.sign({data},process.env.JWT_KEY_USER,(error,token)=>{
                        if(error)
                        res.status(500).send({result:"Fail",message:"Internal Server Error!!!"})
                        else
                        res.send({ result: "Done", data: data,token:token })
                    })
                }
            }
            else
                res.send({ result: "Fail", message: "Username or Password Incorrect!!!!" })
        }
        else
            res.send({ result: "Fail", message: "Username or Password Incorrect!!!!" })
    } catch (error) {
        console.log(error);
        res.send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})

router.post("/forget-password-1", async (req, res) => {
    try {
        var data = await User.findOne({ username: req.body.username })
        if (data) {
            var num = parseInt(Math.random() * 100000000 % 1000000)
            data.otp = num
            await data.save()
            mailOption = {
                from: process.env.EMAILSENDER,
                to: data.email,
                subject: "OTP for Password Reset @!!! : Team Eshopper",
                text: `
                    OTP for Password Reset is ${num}
                    Never Share OTP with Anyone
                    Team : Eshopper
                `
            }
            transporter.sendMail(mailOption, (error, data) => {
                if (error)
                    console.log(error);
            })
            res.send({ result: "Done", message: "OTP Has Been Sent On Your Registered Email Address to Reset Password!!!" })
        }
        else
            res.send({ result: "Fail", message: "User Not Found!!!" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/forget-password-2", async (req, res) => {
    try {
        var data = await User.findOne({ username: req.body.username })

        if (data) {
            if (data.otp === req.body.otp)
                res.send({ result: "Done", message: "OTP Varified!!!" })
            else
                res.send({ result: "Fail", message: "Invalid OTP!!!" })
        }
        else
            res.send({ result: "Fail", message: "UnAuthorized!!!" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/forget-password-3", async (req, res) => {
    try {
        var data = await User.findOne({ username: req.body.username })
        if (data) {
            if (schema.validate(req.body.password)) {
                bcrypt.hash(req.body.password, 12, async (error, hash) => {
                    if (error)
                        res.send({ result: "Fail", message: "Internal Server Error" })
                    else {
                        data.password = hash
                        await data.save()
                        res.send({ result: "Done", message: "Password Has Been Reset!!!", data: data })
                    }
                })
            }
            else
                res.send({ result: "Fail", message: "Invalid Password!!! It's Length must be min 8 and max 20 and it must contain atleast 1 digit,1 lower case character and 1 uppercase character!!!" })
        }
        else
            res.send({ result: "Fail", message: "UnAuthorized!!!" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router