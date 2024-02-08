
const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const shoppingroute=require("./controllers/shoppingroute")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://asnamv123:asnamv08@cluster0.erlchgb.mongodb.net/shoppingDb?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
app.use("/api/shoppingapp",shoppingroute)
app.listen(3001,()=>{
    console.log("server running")
})