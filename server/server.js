const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const PORT=process.env.PORT || 3000
const cors=require('cors')
const model=require('./config/db')
const mongoose=require('mongoose')
const cmodel=require('./config/dbcart')


const allowedOrigins = [
    'https://famous-hotteok-3c9949.netlify.app/',
    'http://localhost:5173' // for local testing
  ];
  

 
  app.use(cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  }));
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

