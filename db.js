const mongoose=require("mongoose")

const Db=mongoose.connect("mongodb://0.0.0.0:27017/Fullstack").then(()=>{
    console.log("Connected to mongodb")
}).catch(()=>{
    console.log("Error while connection")
})

module.exports=Db