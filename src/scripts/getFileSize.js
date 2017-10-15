var XMLHttpRequest = require('w3c-xmlhttprequest').XMLHttpRequest;

function readTextFile(file)
{
    const fs = require('fs');
    const stats = fs.statSync(file);
    console.log(stats.size);
    return stats.size;
    
}
readTextFile('/Users/haoyuyang/BuildingJSLibrary/src/constant/static.txt');