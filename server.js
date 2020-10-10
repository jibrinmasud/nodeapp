const http = require('http');
const fs = require('fs');
const _ = require('loadsh');

const server = http.createServer((req, res) => {
   

    //loadsh

    const num = _.random(0, 24);
    console.log(num);

    const greet = _.once(() =>{
        console.log('helo');
    });
    greet();

    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;        
    }
    // send an html file
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else{
            // res.write(data);
            res.end(data);
        }
    });

});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
});