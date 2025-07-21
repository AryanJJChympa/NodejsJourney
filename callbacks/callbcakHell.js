import { log } from "node:console";
import fs from "node:fs";


fs.readFile('input.txt', 'utf-8', (err,data)=>{
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    const modifyFile=data.toUpperCase();
    fs.writeFile('output.txt', modifyFile, (err,data)=>{
         if (err) {
        console.error('Error writing the file:', err);
        return;
    }

    console.log('data written in the file');
    fs.readFile('output.txt', 'utf-8', (err,data)=>{
        if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
    
    })
    
    })
})