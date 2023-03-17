const express=require('express');
require('./db/db');
const User=require('./models/user')
const cors=require('cors');

const app=express();
const port=process.env.PORT || 9000;

// middleware
app.use(express.json())
app.use(cors())
app.post('/user',async(req,res)=>{
    const user=new User(req.body);
    try{
        await user.save();
        res.status(201).json(user)
    }catch(e){res.status(400).json()}
})

app.get('/login',async(req,res)=>{
    try{
        const user=await User.find({'email':req.body.email,'password':req.body.password})
        res.status(200).json(user)
    }catch(e){res.status(500).json()}
})

app.listen(port,()=>console.log('server is running on port'+port))