const express=require("express")
const shoppingmodel=require("../models/shoppingmodel")
const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let shopping=new shoppingmodel(data)
    let result=await shopping.save()
    res.json({
        status:"success"
    })
})
router.get("/view",async(req,res)=>{
    let data=await shoppingmodel.find()
    res.json(data)
})


module.exports=router