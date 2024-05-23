const express = require("express")
const [verifyToken,verifyTokenAdmin] = require("../tokenVerification")
const Newslatter = require("../model/Newslatter")

var router = express.Router()

router.get("/",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Newslatter.find().sort({ _id: -1 })
        res.send({ result: "Done", count: data.length, data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", async (req, res) => {
    try {
        var data = new Newslatter(req.body)
        await data.save()
        res.send({ result: "Done", message: "Thanks to Subscribe Our Newslatter Service!!! Now We Will Send Emails About New Products and Greate Offerse!!!", data: data })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Your Email Address is Already Registered With US!!!" })
        else if (error.errors.email)
            res.status(400).send({ result: "Fail", message: error.errors.email.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Newslatter.findOne({ _id: req.params._id })
        if(data){
            await data.deleteOne()
            res.send({ result: "Done", message:"Record is Deleted!!!" })
        }
        else
        res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router