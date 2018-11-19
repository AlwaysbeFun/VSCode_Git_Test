/* 服务模块 */
var http = require('http');
var server = http.createServer();
var router = require('./router');
router.route(server);
server.listen(8000,function(){
    console.log('访问localhost:8000');
});