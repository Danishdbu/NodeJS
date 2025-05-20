# 📘 Node.js & Express.js Backend Development Notes (Beginner to Advanced)

## 🔰 Part 1: Introduction to Node.js

### 1.1 What is Node.js?
- Node.js is a **runtime environment** built on **Chrome's V8 JavaScript engine**.
- Allows you to run JavaScript on the **server side**.
- It uses an **event-driven, non-blocking I/O** model, which makes it **fast and scalable**.

### 1.2 Installing Node.js
- Download from [https://nodejs.org](https://nodejs.org).
- Use `node -v` and `npm -v` to verify installation.

### 1.3 Running Your First Script
```bash
node app.js
```

```js
console.log("Hello from Node.js");
```

### 1.4 Global Objects
- `__dirname`, `__filename`, `require`, `module`, `exports`, `process`

## 🧱 Part 2: Core Modules

### 2.1 File System (`fs`)
```js
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 2.2 Path, OS, HTTP, Events Modules

### 2.3 Creating a Basic HTTP Server
```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write("Hello, World");
  res.end();
});

server.listen(3000);
```

## ⚙️ Part 3: Modules and NPM

### 3.1 Custom Modules
```js
// utils.js
module.exports = function(name) {
  return `Hello, ${name}`;
};
```

```js
const greet = require('./utils');
console.log(greet("Danish"));
```

### 3.2 NPM Basics
- `npm init`
- `npm install <package>`
- `package.json` and `package-lock.json`

## 🚀 Part 4: Introduction to Express.js

### 4.1 What is Express.js?
- A **minimal and flexible** Node.js web framework.
- Handles routing, middleware, and HTTP utility methods.

### 4.2 Install and Setup
```bash
npm install express
```

```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello from Express");
});

app.listen(3000);
```

## 🔄 Part 5: Express Core Concepts

### 5.1 Routing
```js
app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });
```

### 5.2 Middleware
```js
app.use(express.json());
app.use((req, res, next) => {
  console.log("Request received");
  next();
});
```

### 5.3 Request and Response
- `req.params`, `req.query`, `req.body`
- `res.send`, `res.json`, `res.status`

## 🗃️ Part 6: REST APIs with Express

### 6.1 CRUD Operations (Create, Read, Update, Delete)
```js
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
});
```

### 6.2 Using Postman for API Testing

## 🛡️ Part 7: Advanced Express Topics

### 7.1 Express Router
```js
const router = express.Router();
router.get('/', ...);
app.use('/api/users', router);
```

### 7.2 Error Handling Middleware
```js
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong');
});
```

### 7.3 Environment Variables with `dotenv`
```bash
npm install dotenv
```
```js
require('dotenv').config();
console.log(process.env.PORT);
```

## 🧠 Part 8: Database Integration

### 8.1 MongoDB with Mongoose
```bash
npm install mongoose
```

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb');

const User = mongoose.model('User', { name: String });
```

### 8.2 Basic Schema, Model, and CRUD

## 🔐 Part 9: Authentication & Authorization

### 9.1 JWT Authentication
```bash
npm install jsonwebtoken bcrypt
```

### 9.2 Login, Signup APIs

## 📂 Part 10: Project Structure & Best Practices

```
/controllers
/routes
/models
/middleware
/config
```

## 🚢 Part 11: Deployment

### 11.1 Deploy on Render, Railway, or Vercel

### 11.2 Production Tips

## 📌 Useful Packages

| Package           | Use                             |
|------------------|----------------------------------|
| `express`        | Web framework                    |
| `mongoose`       | MongoDB ORM                      |
| `dotenv`         | Environment variables            |
| `cors`           | Cross-origin requests            |
| `helmet`         | Security headers                 |
| `bcrypt`         | Password hashing                 |
| `jsonwebtoken`   | Auth token                       |
| `morgan`         | Logging                          |
