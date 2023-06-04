const mongoose=require("mongoose")

const DataSchema=new mongoose.Schema({

name:{
    type:"String"
},
mobile:{
    type:"Number"
},
address:{
    type:"String"
},
email:{
    type:"String"
},
password:{
    type:"String"
}

})


const Schemamodels=new mongoose.model("Schemamodels",DataSchema)

module.exports=Schemamodels;