const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    image:String,
    price:Number
})

const model=mongoose.model("snack",schema)

module.exports=model