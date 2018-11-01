// var fs = require('fs');
// var str = '丁伸666';
// fs.writeFile('b.txt',str,function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("恭喜恭喜");
//     }
// });

// fs.readFile('b.txt','utf8',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// });


// var http = require('http');
// var server = http.createServer();
// server.listen(8000,function(){
//     console.log("开始监听");
// })

// server.on('request',function(req,res){
//     res.setHeader('Content-Type','text/plain;charset=utf-8');
//     console.log('服务端收到请求');
//     res.write('你好世界');
//     res.end();
//     // console.log(res);
// });

// //1.导入
// var http = require('http');
// var fs = require('fs');
// //2.创建服务对象
// var server = http.createServer();
// //3.监听
// server.listen(8000,function(){
//     console.log('访问localhost:8000');
// });
// //4.为服务对象注册request事件
// server.on('request',function(req,res){
//     fs.readFile('./test.html',function(err,data){
//         res.end(data);  
//     })
// });

// 导入
var http = require('http');
var fs = require('fs');
// 创建服务对象
var server = http.createServer();
// 监听开端口
server.listen(8000,function(){
    console.log('访问localhost:8000');
});
// 监听请求事件
server.on('request',function(req,res){
    var urls = req.url;
    console.log(urls);
    if(urls == '/'){
        fs.readFile('./test.html',function(err,data){
            res.end(data);
        });
    }
    else{
        fs.readFile('.'+urls,function(err,data){
            res.end(data);
        })
    }
    
});