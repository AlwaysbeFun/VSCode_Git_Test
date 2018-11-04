/* 路由模块 */
var fs = require('fs');
var controller = require('./controller');
function cServer(server){
    server.on('request',function(req,res){
        var urls = req.url;
        if(urls == '/'){
            res.setHeader('Content-Type','text/html;charset=utf-8');
            res.end(controller.html);
            /* 回调函数的方式 */
            // controller.getHtmls(function(data){
            //     res.end(data);
            // });
        }
        else{
            fs.readFile('.'+urls,function(err,data){
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            });
        }
    });
}
module.exports.cs = cServer;