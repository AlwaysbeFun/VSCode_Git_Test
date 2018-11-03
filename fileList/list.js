//引入
var http = require('http');
var fs = require('fs');
var moment = require('moment');
//建立服务
var server = http.createServer();
//监听端口
server.listen(8000,function(){
    console.log('请访问localhost:8000');
});
//监听请求
server.on('request',function(req,res){
    // console.log("来了老弟");
    var urls = req.url;
    // console.log(urls);
    if(urls == '/'){
        fs.readFile('./index.html',function(err,data){
            if(!err){
                res.end(data);
            }
            else{
                console.log('发生错误');
            }
        });
    }
    else if(urls == '/filename'){
        fs.readdir('./',function(err,file){
            var arr = [];
            var count = 0;
            for(var i = 0; i < file.length; i++){
                arr[i] = {};
                (function(i){
                    fs.stat('./'+file[i],function(err,stats){
                        arr[i].name = file[i];
                        arr[i].mtime = moment(stats.mtime).format('YYYY-MM-DD hh:mm:ss');
                        arr[i].size = stats.size;
                        count++;
                        if(count == file.length){
                            var result = JSON.stringify(arr);
                            res.end(result);
                        }
                    });
                })(i);
            }
        });

    }
    else{ 
        fs.readFile('.'+urls,function(err,data){
            if(!err){
                // console.log(data);
                // res.write(data,'utf8');
                res.end(data,'binary');
            }
            else{
                console.log(urls+'不存在');
            }
        });
    }
});