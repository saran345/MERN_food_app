const express = require('express');
const router = express.Router();
const model = require('../config/db');
const bmodel=require("../config/burgerdb")
const cmodel = require('../config/dbcart');
const smodel=require("../config/Snackdb")
const rmodel=require('../config/Registerdb')
const lmodel=require('../config/Logindb')
const bcrypt = require('bcryptjs');
router.use(express.json());

router.get('/product', async (req, res) => {
    try {
        const products =await model.find();
        res.status(201).json(products);
        console.log("GET PRODUCT METHOD");
    } catch (err) {
        
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.post('/cart',async(req, res)=>{
    try {
        const { id: productId }=req.body;
        
        if (!productId) {
            return res.status(401).json({message:"ProductId is required!"});
        }
        const pcart =await model.findById(productId);
        if (!pcart) {
            return res.status(401).json({ message:'Product not found' });
        }
        const cartItem =await cmodel.create({ 
            productId: pcart._id, 
            name: pcart.name,    
            image:pcart.image,
            price:pcart.price  
          
        });
        console.log("Successfully products added!");
        res.status(201).json({ message: 'Product added to cart successfully', cartItem });
    } catch (err) {
        res.status(500).json({ error:'Server Error'});
    }
 });

router.get('/burger', async (req, res) => {
    try {
        const burgers =await bmodel.find();
        res.status(201).json(burgers);
        console.log("GET PRODUCT METHOD");
    } catch (err) {
        
        res.status(500).json({error:"Internal Server Error"});
    }
});

router.post('/bcart',async(req, res)=>{
    try {
        const { id: productId }=req.body;
        
        if (!productId) {
            return res.status(401).json({message:"ProductId is required!"});
        }
        const bcart =await bmodel.findById(productId);
        if (!bcart) {
            return res.status(401).json({ message:'Product not found' });
        }
        const cartItem =await cmodel.create({ 
            productId: bcart._id, 
            name: bcart.name,    
            image:bcart.image,
            price:bcart.price  
          
        });
        console.log("Successfully products added!");
        res.status(201).json({ message: 'Product added to cart successfully', cartItem });
    }catch(err){
        res.status(500).json({ error:'Server Error'});
    }
 });

router.get('/snack', async (req, res) => {
    try {
        const burgers =await smodel.find();
        res.status(201).json(burgers);
        console.log("GET PRODUCT METHOD");
    } catch (err) {
        
        res.status(500).json({error:"Internal Server Error"});
    }
});

 router.post('/scart',async(req, res)=>{
    try {
        const { id: productId }=req.body;
        
        if (!productId) {
            return res.status(401).json({message:"ProductId is required!"});
        }
        const scart =await smodel.findById(productId);
        if (!scart) {
            return res.status(401).json({ message:'Product not found' });
        }
        const cartItem =await cmodel.create({ 
            productId: scart._id, 
            name: scart.name,    
            image:scart.image,
            price:scart.price  
          
        });
        console.log("Successfully products added!");
        res.status(201).json({ message: 'Product added to cart successfully', cartItem });
    } catch (err) {
        res.status(500).json({ error:'Server Error'});
    }
 });

router.get('/gcart', async (req, res) => {
    try {
        const cartItems = await cmodel.find();
        res.status(201).json(cartItems);
        console.log('GET method for cart');
    }catch(err){
        console.error("No Food Added");
        res.status(500).json({ error:'Server Error' });
    }
}); 
router.delete('/delete/:id',async(req,res)=>{
    try{
      await cmodel.findByIdAndDelete(req.params.id)
      console.log("food removed")
      res.status(201).json({message:"data removed successfully"})

    }catch(err){
        res.status(501).json({error:"server error"})
    }
})

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await model.findOne({ username });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashp = await bcrypt.hash(password, 10);
        const register = new model({ username, email, password: hashp });
        await register.save();
        res.status(201).send("Successfully reguister")
    } catch (e) {
        res.status(500).json({ error: 'Server error', e });
    }
});

router.post('/user', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await model.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid user or password' });
        }
        const validate = await bcrypt.compare(password, user.password);
        if (!validate) {
            return res.status(400).json({ message: 'Invalid user or password' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (e) {
        res.status(500).json({ error: 'Server error' });
    }
});


router.get('/*',async(req,res)=>{
    res.status(404).json({error:"404 Not found!!!"})
})



module.exports = router;
