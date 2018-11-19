/* 逻辑模块 */
var template = require('art-template');
template.defaults.root = './';
module.exports = {
    getIndex:function(req,res){
        var html_data = template('./index.html');
    }
}