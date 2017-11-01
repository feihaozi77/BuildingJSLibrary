module.exports = {

    getFileSize: function(file)
    {
    const fs = require('fs');
    const stats = fs.statSync(file);
    return stats.size;
    
    }
};