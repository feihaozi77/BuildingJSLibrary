/**
 * @file
 * This file exports module containing function for 
 * getting the 

 * @param {string} path
 *   path of the file
 */
module.exports = {
    
        getFileName: function(path)
        {
            var array = path.split('/');
            return array[array.length-1];
        }
};