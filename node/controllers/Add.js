const writeFile = require('../mod/writefile');

module.exports = function (req, res) {

    let requestBody = [];

    console.clear();

    if (req.headers['content-type'] !== 'application/json') {

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
        const params = JSON.parse(body).params;
        const data = JSON.stringify(JSON.parse(body).data);

        writeFile(params, data)
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)});

        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
    });

};