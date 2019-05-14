const http = require('http');
const fs = require('fs');
const AddController = require('./controllers/Add');
const ReadController = require('./controllers/Read');

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

        fs.readFile('./public/js/index.js', function (err, info) {
            res.end(info);
        });
    }
    if(req.method === 'POST') {

        if(req.url === '/add') {

            AddController(req, res);
        }

        if(req.url === '/read') {

            ReadController(req, res);
        }
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