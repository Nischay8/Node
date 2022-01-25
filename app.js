
const http=require('http');
const fs=require('fs')


// function rqListner(req,res){

// }

const server=http.createServer((req,res)=>{
    const url=req.url;
    console.log()
    const method=req.method;
    if(url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>My first Page</head>')
    res.write('<body><form action ="/message" method="POST"><input type="text" name="messagewa"><button type="submit">Send</button></head>')
    res.write('</html>')
    return res.end();
    }
    if(url==='/message' && method==='POST'){
        console.log(url)
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split('=')[1];
            fs.writeFileSync('message.txt',message)
        });
        
        res.statusCode=302;
        res.setHeader('Location','/');
        return res.end();
    }
    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head>THis Is another page</head>')
    res.write('</html>')
    res.end();
});

server.listen(5000)
