let http = require("http");
let url = require("url");
const {route} = require("express/lib/router");
const {json} = require("express");

function start(route) {
    function onRequest(request,response){
        let pathname = url.parse(request.url).pathname;
        route(pathname);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("router get in");
        response.end();
    }
    http.createServer(onRequest).listen(8088);
    console.log("server start....")
}

exports.start = start;