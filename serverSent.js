import { createServer } from 'node:http'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'

let count=0;

//SERVER SENT EVENTS (SSE)
const server = createServer(async (req, res) => {

    if(req.url==='/'){
        const htmlPage=fs.createReadStream('./stream.html');
        htmlPage.pipe(res);
    }else if(req.url==='/stream'){
        res.writeHead(200,{
            'content-type':'text/event-stream',
            'cache-control':'no-cache',
            connection:'keep-alive',
        });

        setInterval(()=>{
            res.write(`data: The count is - ${count++}\n\n`);
        },1000);
    }

    // if (req.url === '/') {
    //     res.writeHead(200, { 'content-type': 'text/html' })

    //     // const data = await fs.readFile('./server.html'); This is not a practical approach because its loading the whole page at once and suppose 1000 users request at the same time then it will load the memory 1000 times which will be problematic so to counter this we use STREAMING concept..

    //     const dataStream = fs.createReadStream('./server.html');
    //     dataStream.pipe(res);
    //     // dataStream.on('data', (chunk)=>{
    //     //     res.write(chunk)
    //     // })        
    //     // dataStream.on('end',()=>{
    //     //     res.end();
    //     // })

    //     // res.end(data);
    // } else if (req.url === '/expenses') {
    //     //APIS

    //     //1) Create an expense
    //     //POST

    //     if (req.method === 'POST') {
    //         //read data from req
    //         let buff = '';
    //         req.on('data', (chunk) => {
    //             // console.log('chunk', chunk);
    //             buff += chunk.toString();
    //         });

    //         req.on('end', async () => {
    //                 const data = await fsPromises.readFile('./db.json');
    //                 const dbData = JSON.parse(data);
                   
    //                 dbData.push(JSON.parse(buff));

    //                 await fsPromises.writeFile('./db.json', JSON.stringify(dbData,null,2));

    //                 res.end('OK');       
    //         });

    //         //store it in json database
    //     } else if (req.method === 'GET') {
    //         //read data from json dbt
    //         const data=await fsPromises.readFile('./db.json')
    //         res.end(data)
    //         //return data to client
    //     }

    // }
});

server.listen(3000, () => {
    console.log("Server is Listening on port 3000");
})