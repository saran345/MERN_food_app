const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 3000
const cors=require('cors')
const model=require('./config/db')
const mongoose=require('mongoose')
const cmodel=require('./config/dbcart')

app.use(cors())
app.use(express.json())

app.use('/',require('./router/router'))



mongoose.connect("mongodb+srv://Food-mern:foodmern@cluster0.47bjpvd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{
    useNewUrlParser:true,
     useUnifiedTopology:true
})
.then(()=> console.log('connected../'))
.catch(()=> console.log('disconnected.../'))


console.log(dotenv)

app.listen(PORT,()=> console.log(`server is running in port ${PORT}`))

