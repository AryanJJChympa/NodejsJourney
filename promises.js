import * as fs from 'node:fs/promises';
import path from 'node:path';


export async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive:true})
}

export async function deleteFolder(folderPath) {
    await fs.rm(folderPath, {recursive:true});
}

export async function createFile(pathname, content='') {
   await fs.writeFile(pathname, content); 
}

export async function readFile(pathname) {
    const data=await fs.readFile(pathname, 'utf-8');
    console.log('Data:-',data); 
}

export async function writeToFile(pathname, content='') {
    await fs.appendFile(pathname,content);
}

export async function deleteFile(filePath) {
    await fs.unlink(filePath);
}

export async function listItems(listPath='./') {
    const items=await fs.readdir(listPath,{withFileTypes:true});
    return items.map((item)=>{
        return{
            name:item.name,
            type:item.isDirectory()?'folder':'file',
            path:path.join(import.meta.dirname, item.name),
        }
    })
}
listItems(); 

// async function fileinfo(filePath) {
//     const stats = await fs.stat(filePath);
//     return{
//         size:`${(stats.size/1024).toFixed(2)} KB`,
//         created:stats.birthtime.toLocaleString(),
//         modified:stats.mtime.toLocaleString(), 
//     }  
// }
// fileinfo('./hello.txt').then((data)=>{
//     console.log('data',data);   
// });



//---------Already created the templates just use them to manipulate files & folders----------

// createFolder('./contents/images/logos');
// deleteFolder('./contents');
// createFile('./hello.txt', 'Hello NodeJs! \n');
// readFile('./hello.txt');
// writeToFile('./hello.txt', 'I just write onto hello.txt\n')
// deletFile('./hello.txt');
