/**
 * @file
 * This file exports module containing function for 
 * get the Sha1 digested value.

 * @param {string} myFile
 *   name of the file to be converted
 * @param {function} callback
 *   callback function that displays the result of the sha1 value
 */
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