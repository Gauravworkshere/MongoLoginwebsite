const express=require("express")
const mongoose=require("mongoose")
const Db = require("./Db/db")
const path=require("path")

const hbs=require("hbs")

const Schemamodels = require("./Models/Models")

const app=express()

// app.use(express.json())

const port=process.env.PORT || 4200



// Setting path
const staticpath=path.join(__dirname,"../portweb/public")
const templatepath=path.join(__dirname,"../portweb/templates/views")
const partialspath=path.join(__dirname,"../portweb/templates/partials")
// const static_path=path.join(__dirname,"../portweb/templates/views")
// Midddleware

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jqurey/dist/jq")))

app.use(express.static(staticpath))
// middleware
app.set("view engine","hbs")
app.set("views",templatepath)
hbs.registerPartials(partialspath)
 
// ----------------------------------------------//
app.use(express.urlencoded({extended:false}))


// -------------------------------------------

app.get("/index",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/code",(req,res)=>{
    res.render("code")
})
app.get("/form",(req,res)=>{
    res.render("register")
})

app.get("/",(req,res)=>{
    res.render("index")
})

// After login codes
app.get("/codes",(req,res)=>{
    res.render("codes")
})
app.get("/data",(req,res)=>{
    res.render("data")
})

// After login codesEnd


// Register details

app.post('/form', (req,res)=>{

    try{

    const values= new Schemamodels({
        name:req.body.name,
        mobile:req.body.mobile,
        email:req.body.email,
        address:req.body.address,
        password:req.body.password,
        
    })

values.save()
  

    res.status(201).render("register")

    }catch{
        console.log("Sorry gets error")
    }

})


// Login Verify

app.post("/login", async(req,res)=>{
    try{
        const email=req.body.email
        const password=req.body.password
        const connect=await Schemamodels.findOne({email:email})

        if(connect.password===password){
            res.status(201).render('data')
            console.log("Login Successfully Bro")
        }else{
           alert("Sorry password wrong")
        }

    }catch{
    console.log("Sorry error occurs")
    }
})




app.listen(port,()=>{
    console.log(`Hey live now on ${port}`)
})