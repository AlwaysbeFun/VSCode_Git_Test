// var a = require('fs');
// console.log(a);

var fs = require('fs');
var text = '丁伸6666';
// fs.writeFile('./a.txt',text,function(err){
//     console.log(err);
// });

fs.readFile('./a.txt','utf8',function(err,data){
    console.log(data);
});
