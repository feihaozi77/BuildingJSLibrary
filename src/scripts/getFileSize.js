/**
 * @file
 * This file exports module containing function for 
 * get the file content size.

 * @param {string} file
 *   name of the file
 */
module.exports = {

    getFileSize: function(file)
    {
    const fs = require('fs');
    const stats = fs.statSync(file);
    console.log(stats.size);
    return stats.size;
    
    }
};