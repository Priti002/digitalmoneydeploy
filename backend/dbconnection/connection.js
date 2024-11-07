const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://sakshi:Sahil@crud.iqligr0.mongodb.net/crud").then(()=>{
    console.log("connection succesfull")
}).catch((e)=>{
    console.log(e)
})
