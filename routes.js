import { createServer } from "node:http";
import fs from "node:fs";


const server = createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.writeHead(200, {"Content-Type" : 'text/plain'});
        res.end('Home Page');
    }else if(url==='/projects'){
        res.writeHead(200, {"Content-Type" : 'text/plain'});
        res.end('Project Page');
    }else{
        res.writeHead(404, {"Content-Type" : 'text/plain'});
        res.end('Page Not Found!');
    }
});

const port=3000;
server.listen(port,()=>{
    console.log(`Server is live on port : ${port}`);
    
})