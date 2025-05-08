const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Coding</title></head>');
        res.write('<body><h1>Enter your details</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<label for="name">Name:</label>');
        res.write('<input type="text" id="name" name="name"><br><br>');
        res.write('<label>Gender:</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label><br>');
        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');
        res.write('<button type="submit">Submit</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }else if (req.url.toLowerCase() === "/submit-details" && req.method === "POST"){
        fs.writeFileSync('user.txt','Prashant Jain');
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Coding</title></head>');
    res.write('<body><h1>Welcome my website</h1></body>');
    res.write('</html>');
    res.end();
    
   
});

server.listen(3000,() =>{
    console.log(`Server running on address http://localhost:3000`);
});