const http = require('http');


const server = http.createServer((req,res)=>{
    console.log(req.url,req.method,req.headers);
    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Coding</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
        return res.end();

    }else if(req.url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Coding</title></head>');
        res.write('<body><h1>Welcome about</h1></body>');
        res.write('</html>');
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