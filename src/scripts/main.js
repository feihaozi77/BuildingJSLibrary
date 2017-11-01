var getFileSize = require('./getFileSize');
var getFileName = require('./getFileName');
var getFileSha1 = require('./getFileSha1');
var staticPath = '/Users/haoyuyang/BuildingJSLibrary/src/constant/static.txt';

if(process.argv.length==3){
    staticPath = process.argv[2];
}

console.log("File size: "+getFileSize.getFileSize(staticPath));
console.log("File name: "+getFileName.getFileName(staticPath));

getFileSha1.getFileSha1(staticPath, function(data){
    console.log("File Sha1 hash: "+data);          
});