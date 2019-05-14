const fs = require('fs');

module.exports = function (filePath, res) {
    fs.stat(filePath, function(err, stats) {
        if (err) {
            res.statusCode = 404;
            res.end("File not found!");
        } else {
            fs.readFile(filePath, (err, data) => {

                if(err){

                    res.statusCode = 404;
                    res.end("Resourse not found!");

                } else {

                    res.statusCode = 200;
                    res.setHeader("Content-Type", "application/json");

                    res.end(data);

                    console.log('The file has been read!');
                }


            });
        }
    });
};

