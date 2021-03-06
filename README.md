# BuildingJSLibrary
*This Library holds functions for performing common Javascript tasks, including interating with local 
file system, getting filename .etc*

## Build Status
[![Build Status](https://travis-ci.org/feihaozi77/BuildingJSLibrary.svg?branch=master)](https://travis-ci.org/feihaozi77/BuildingJSLibrary)

## How to contribute
1 clone the repo using git clone <br>
2 cd into BuildingJSLibrary folder <br>
3 run npm install to install all dependencies <br>
4 open the cloned project folder with your favourite editor (Visual Studio Code recommanded)<br><br><br>
If you are using Visual Studio Code you can run this project from the built-in node.js environment, below is how you run the code in the debug mode<br>
1 click on main.js <br>
2 then go to the debug mode by clicking on the spider tab on the left panel <br>
3 On the top click on play button and select nodejs to run the scripts. <br>

Once you run successfully, the script output will be displayed in the debug console pane on the buttom 

## About the sh1 digest function
For the sha1 digest, a library called js-sha1 is being used, written by emn178. The library can be installed with Bower with the command

`bower install js-sha1`

Or with node.js, with the command 

`npm install js-sha1`
## code example
**new functions should be implemented in the scripts folder**
**your new function should return new module by using the .exports**
```javascript
var sha1 = require('../../node_modules/js-sha1/src/sha1');

module.exports = {
    getFileSha1: function(myFile, callback)
    {
        var fs = require('fs'), filename = myFile;
        fs.readFile(filename, 'utf8', function(err, data) {
            if (err) throw err;
            // return SHA1 hash to of text file
             callback(sha1(data));
        });
    }
};
```
