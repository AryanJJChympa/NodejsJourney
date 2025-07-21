const path= require('path')

console.log('Current Dir: ', path.dirname(__filename));

console.log('Filename: ', path.basename(__filename));

console.log('File extension: ', path.extname(__filename));

const joinPath = path.join('/user', 'docuements', 'node', 'projects');
console.log("Joined Path: ",joinPath );

const resolvePath = path.resolve('/user', 'docuements', 'node', 'projects');
console.log("Resolved Path: ",resolvePath );


const normalizePath = path.normalize('/user/.documents/..node/projects');
console.log("Normalize Path: ",normalizePath);
