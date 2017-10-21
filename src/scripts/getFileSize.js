module.exports = {

    readTextFile: function(file)
    {
    const fs = require('fs');
    const stats = fs.statSync(file);
    console.log(stats.size);
    return stats.size;
    
    }
};