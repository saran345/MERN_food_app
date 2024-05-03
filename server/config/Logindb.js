const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    password: {
        type: String,
        required: true,
        minlength: 6 
    }
})

const model=mongoose.model("login",schema)

module.exports=model