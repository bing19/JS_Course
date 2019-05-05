const http = require('http');
const fs = require('fs');

const server = http.Server();
server.listen(3000, () => console.log(`Server running on 3000 port`));


server.on('request', (req, res) => {


    if(req.url === '/') {
        const filePath = './public/index.html';

        fs.readFile(filePath, (error, data) => {

            if(error){

                res.statusCode = 404;
                res.end("Resourse not found!");
            }
            else{
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
    }

    if(req.url == '/public/js/index.js'){

        fs.readFile('./public/js/index.js',function (err, info) {
            res.end(info);
        });
    }

    if(req.url === '/add') {

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

            fs.stat(params.folderName, (err, stats) => {
                if(err) {
                    if(!stats.isFile())
                        fs.mkdir(params.folderName, (err) => {console.log(err)});
                } else {

                    fs.writeFile(`${params.folderName}/${params.fileName}.json`, data, (err) => {
                        if (err) throw err;
                        console.log('The file has been saved!');
                    });

                }
            });

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(data);
        });
    }


    if(req.url === '/read') {

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
        });
    }


});




// server.on('request', handlerRequest);

// server.on('request', (req, res) => {
//
//     let urlParsed = url.parse(req.url, true);
//     // debugger;
//     // console.log(req.headers);
//
//     if(urlParsed.pathname === '/echo' && urlParsed.query.message) {
//         res.statusCode = 200;
//         res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate');
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<h2>${urlParsed.query.message.toUpperCase()}</h2>`);
//     } else {
//         res.statusCode = 404;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<h2>Page Not Found</h2>`);
//     }
//
// });

// server.on('timeout', function(){
//     console.log('Go to Braek Time');
// });