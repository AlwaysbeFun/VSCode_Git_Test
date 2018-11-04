/* 服务模块 */
var http = require('http');
var server = http.createServer();
var router = require('./router');
router.cs(server);
server.listen(8000,function(){
    console.log('访问http://localhost:8000');
});
