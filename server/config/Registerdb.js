const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    password: {
        type: String,
        required: true,
        minlength: 6 
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    }
})

const model=mongoose.model("register",schema)

module.exports=model