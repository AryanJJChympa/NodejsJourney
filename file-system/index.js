

const fs=require('fs')
const path=require('path')

const dataFolder = path.join(__dirname, "data");
if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("Data folder created"); 
}else{
    console.log("Data folder is already present");
}
 
const dataFile = path.join(dataFolder, "example.txt");
// if(!fs.existsSync(dataFile)){
    fs.writeFileSync(dataFile, 'Hello form node js');
    console.log("File is created");
// }else{
//     console.log("File is already presene");    
// }


