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