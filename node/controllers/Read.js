const readFile = require('../mod/readfile');

module.exports = function (req, res) {

    let requestBody = [];


    if(req.headers['content-type'] !== 'application/json') {
        res.writeHead(400, 'Bad Request', {'Content-Type': 'application/json'});
        res.end();
    }

    req.on('data', chunk => {
        requestBody.push(chunk);

        if(requestBody.length > 1e7) {
            res
                .writeHead(413, 'Request To Large', {'Content-Type': 'application/json'})
                .end();
        }
    });

    req.on('end', () => {

        body = Buffer.concat(requestBody).toString();
        const filePath = JSON.parse(body).filePath;

        readFile(filePath, res);


    });

};