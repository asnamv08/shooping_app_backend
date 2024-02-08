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

module.exports=router