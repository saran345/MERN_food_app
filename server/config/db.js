const mongoose=require('mongoose')

const schema=mongoose.Schema({
    name:String,
    image:String,
    price:Number
})

const model=mongoose.model("pizza",schema)

module.exports=model