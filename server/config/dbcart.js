const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    image:String,
    price:Number
})

const model=mongoose.model("cart",schema)

module.exports=model