var getFileSize = require('./getFileSize');

function getFileName(path){
 var array = path.split('/');
 return array[array.length-1];
}

var result = getFileName('a/v/c');
console.log(result);

console.log(getFileSize.readTextFile('/Users/haoyuyang/BuildingJSLibrary/src/constant/static.txt'));