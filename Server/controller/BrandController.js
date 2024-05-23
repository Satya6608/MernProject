const express = require("express")
const [verifyToken,verifyTokenAdmin] = require("../tokenVerification")


const Brand = require("../model/Brand")

var router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Brand.find().sort({ _id: -1 })
        res.send({ result: "Done", count: data.length, data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Brand.findOne({ _id: req.params._id })
        if(data)
        res.send({ result: "Done", count: data.length, data: data })
        else
        res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyTokenAdmin, async (req, res) => {
    try {
        var data = new Brand(req.body)
        await data.save()
        res.send({ result: "Done", message: "Record is Created!!!", data: data })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Brand Name Must Be Unique!!!" })
        else if (error.errors.name)
            res.status(400).send({ result: "Fail", message: error.errors.name.message })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Brand.findOne({_id:req.params._id})
        if(data){
            data.name = req.body.name??data.name
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else
        res.status(404).send({ result: "Fail", message: "No Record Found!!!" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Brand Name Must Be Unique!!!" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyTokenAdmin, async (req, res) => {
    try {
        var data = await Brand.findOne({ _id: req.params._id })
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