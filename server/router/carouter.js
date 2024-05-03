const express = require('express')
const router=express.Router()
const model=require('../config/db')

router.post('/cart',async(req,res,next)=>{
    try{
        const product=req.params.id
    const data=new model.findById(product)
    await data.save()
    console.log("cart added")
    res.status(201).json({message:'products add to cart successfully'})
    next()
    }catch(err){
        res.status(401).jsong('error occur')
    }
})
router.get('/gcart',async(req,res)=>{

    const data=await model.find()
    res.status(200).json({message:"cart data send successfully"})
    console.log('cget method')
})

module.exports=router