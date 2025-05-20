// Core Module
const path = require('path');

// External Module
const express = require('express');
const hostRouter = express.Router();

// Local Module
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
})


const registeredHome = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for:',req.body, req.body.houseName);
  registeredHome.push({homeName:req.body.houseName})

  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
})

exports.hostRouter = hostRouter;
exports.registeredHome = registeredHome;