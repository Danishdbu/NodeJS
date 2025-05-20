// Core Modules
const path = require('path');

// External Module
const express = require('express');
const userRouter = express.Router();


const { registeredHome } = require('./hostRouter');

userRouter.get("/", (req, res, next) => {
  console.log(registeredHome);
  res.render('home',{registeredHome :registeredHome});
});

module.exports = userRouter;