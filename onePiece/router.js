/* 路由模块 */
var controller = require('./controller');
module.exports = {
    route:function(server){
        server.on('request',function(req,res){
            var urls = req.url;
            if(urls == '/'){
                controller.getIndex(req,res);
            }
        });
    }
}