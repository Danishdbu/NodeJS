
const express = require('express');
const requestHandler = require('./user');

const app = express();

app.use("/",(req,res,next)=>{
  console.log("Came in first middleware",req.url,req.method);
  res.send("<p>welcome in first middleware</p>");
  next();
});
app.use("/",(req,res,next)=>{
  console.log("Came in another middleware",req.url,req.method);
  res.send("<p>welcome in another middleware</p>");
});
app.use("/submit-details",(req,res,next)=>{
  console.log("Came in second middleware",req.url,req.method);
  res.send("<p>welcome in middleware</p>");
}); 





const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});