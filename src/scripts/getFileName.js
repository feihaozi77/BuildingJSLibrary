module.exports = {
    
        getFileName: function(path)
        {
            var array = path.split('/');
            return array[array.length-1];
        }
};