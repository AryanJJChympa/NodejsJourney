import {createServer} from 'node:http'
import fs from 'node:fs/promises'
import { readFile } from 'node:fs';
const server =createServer(async(req,res)=>{
    console.log("Request Received...");

    if(req.url==='/'){
        res.writeHead(200, {'content-type':'text/html'})
        
        const data=await fs.readFile('./server.html');

        res.end(data);
    }else if(req.url==='/about'){
        res.writeHead(200, {'content-type':'text/html'})
    
        res.end('<h1>This is about page </h1>');
    }else if(req.url==='/contact'){
        res.writeHead(200, {'content-type':'text/html'})
    
        res.end('<h1>This is contact page </h1>');
    }
});

server.listen(3000, ()=>{
    console.log("Server is Listening on port 3000"); 
})