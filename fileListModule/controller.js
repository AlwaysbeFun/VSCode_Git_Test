var fs = require('fs');
var moment = require('moment');
var template = require('art-template');
template.defaults.root = './';
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
                    var html = template('./index.html',{data:arr});
                    module.exports.html = html;
                }
            });
        })(i);
    }
});

/* 回调函数的方式 */
// module.exports = {
//     getHtmls: function (callback) {
//         fs.readdir('./','utf8',function (err, file) {
//             var arr = [];
//             var count = 0;
//             for (var i = 0; i < file.length; i++) {
//                 arr[i] = {};
//                 (function (i) {
//                     fs.stat('./' + file[i], function (err, stats) {
//                         arr[i].name = file[i];
//                         arr[i].mtime = moment(stats.mtime).format('YYYY-MM-DD hh:mm:ss');
//                         arr[i].size = stats.size;
//                         count++;
//                         if (count == file.length) {
//                             var html_data = template('./index.html', {
//                                 data: arr
//                             });
//                             callback(html_data);
//                         }
//                     });
//                 })(i);
//             }
//         });
//     }
// };

