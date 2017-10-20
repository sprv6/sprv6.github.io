'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs=require('fs');
http.createServer(function (req, res) {
    console.log("new request!");
    var url = require('url').parse(req.url, true).query.url;
    if (url != undefined) {
        fs.appendFile('log.txt', (url+'\n'), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('The url is '+url);
}).listen(port);
