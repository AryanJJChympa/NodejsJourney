// import * as fs from 'node:fs';
import * as fs from 'node:fs/promises';

function createFile(pathname) {
    //---------------SYNC----------------
    // fs.writeFileSync(pathname, 'Hello, NodeJs! \n');
    // fs.appendFileSync(pathname, 'Hello, JavaScript!');
    // console.log('File has been created!');

    //---------------ASYNC---------------
    //Error first callbacks - 
    fs.writeFile(pathname, 'Hello Nodejs\n', (err) => {
        if (err) {
            console.log("Something went wrong while creating the file.");
            return;
        }

        console.log('File has been created Asynchronously.');

    });

    fs.appendFile(pathname, 'Hello Javascript\n', (err) => {
        if (err) {
            console.log("Something went wrong while creating the file.");
            return;
        }

        console.log('File has been created Asynchronously.');

    });

    console.log('File operation done!');
}

createFile('./hello.txt');  