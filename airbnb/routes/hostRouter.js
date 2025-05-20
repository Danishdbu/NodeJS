const path = require('path');

const express = require('express');
const hostRouter = express.Router();

hostRouter.get("/host/add-home",(req,res,next) =>{  
    res.sendFile(path.join(__dirname,'../','views','addHome.html'));
})

hostRouter.post("/host/add-home",(req,res,next) =>{
    
    res.sendFile(path.join(__dirname,'../','views','homeAdded.html'));
})

module.exports = hostRouter;