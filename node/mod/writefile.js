const fs = require('fs');

module.exports = function (params, data) {

    return new Promise((res, rej) => {

        fs.stat(params.folderName, (err, stats) => {

            if(err) {
                if(!stats.isFile())
                    fs.mkdir(params.folderName, (err) => {rej(err)});
            } else {
                fs.writeFile(`${params.folderName}/${params.fileName}.json`, data, (err) => {
                    if (err) rej (err);

                    res('File Has Been Save');
                });

            }
        });

    });


};