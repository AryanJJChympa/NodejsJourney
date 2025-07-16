import * as fs from 'node:fs/promises';

async function createFolder(foldername) {
    await fs.mkdir(foldername, {recursive:true})
}

async function deleteFolder(folderPath) {
    await fs.rm(folderPath, {recursive:true});
}

async function createFile(pathname, content='') {
   await fs.writeFile(pathname, content); 
}

async function readFile(pathname) {
    const data=await fs.readFile(pathname, 'utf-8');
    console.log('Data:-',data); 
}

async function writeToFile(pathname, content='') {
    await fs.appendFile(pathname,content);
}

async function deletFile(filePath) {
    await fs.unlink(filePath);
}


//---------Already created the templates just use them to manipulate files & folders----------

// createFolder('./contents/images/logos');
// deleteFolder('./contents');
// createFile('./hello.txt', 'Hello NodeJs! \n');
// readFile('./hello.txt');
// writeToFile('./hello.txt', 'I just write onto hello.txt\n')
// deletFile('./hello.txt');
