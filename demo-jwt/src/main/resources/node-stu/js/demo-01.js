/**
 * node 三部分：required，server，receive and response
 *  允许用户从NPM服务器下载别人编写的第三方包到本地使用。
 *允许用户从NPM服务器下载并安装别人编写的命令行程序到本地使用。
 *允许用户将自己编写的包或命令行程序上传到NPM服务器供别人使用
 */

//载入http
let http = require("http");

//创建服务
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world');
}).listen(8888);
console.log("demo-01 test");


/*
*express
*可以设置中间件来响应 HTTP 请求。
*定义了路由表用于执行不同的 HTTP 请求动作。
*可以通过向模板传递参数来动态渲染 HTML 页面。
* */
var express = require('express');
var app = express();

//  主页输出 "Hello World"
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
})


//  POST 请求
app.post('/', function (req, res) {
    console.log("主页 POST 请求");
    res.send('Hello POST');
})

//  /del_user 页面响应
app.get('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
})

//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
    console.log("/list_user GET 请求");
    res.send('用户列表页面');
})

// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})


var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});

/*
* Node 所有 API 都支持回调函数。
* */

let fs = require("fs");

let data = fs.readFileSync("test.txt");
console.log(data.toString());


