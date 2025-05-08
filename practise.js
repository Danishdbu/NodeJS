const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url,req.method);
    if(req.url === '/home'){
        res.write('<h1>Welcome to Home</h1>');
        return res.end();
    } else if(req.url === '/men'){
        res.write('<h1>Welcome to Men</h1>');
        return res.end();
    }
    else if(req.url === '/women'){
        res.write('<h1>Welcome to Women</h1>');
        return res.end();
    }
    else if(req.url === '/kids'){
        res.write('<h1>Welcome to Kids</h1>');
        return res.end();
    }else if(req.url === '/cart'){
        res.write('<h1>Welcome to Card</h1>');
        return res.end();
    }




    res.write(`<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/home">home</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/kids">kids</a></li>
                <li><a href="/cart">cart</a></li>
            </ul>
        </nav>
    </head>
    
</body>
</html>`)
res.end();

});

server.listen(3000,() =>{
    console.log(`Server running on address http://localhost:3000`);
});