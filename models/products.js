const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        requried : true , 
    },
    price : {
        type : Number , 
        required : true 
    }, 
    company : {
        type : String , 
        required : true 
    }, 
    rating : {
        type : Number , 
        default : 0 
    }, 
    createdAt : {
        type : Date ,
        default : Date.now()
    }
})

module.exports = mongoose.model("products" , userSchema)