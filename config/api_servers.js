var express = require("express");
var bodyParser = require('body-parser');
var proxy = require('http-proxy-middleware');
var cookieParser = require('cookie-parser');
var app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);
var db = require('./db');
app.set('port', process.env.PORT || 19000);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

//监听端口是否启动
http.listen(app.get('port'), function () {
  console.log('server listening on port' + app.get('port'));
});
//获取新闻中心列表
app.post('/api/login', function (req, res) {
  res.send(db.loginInfo);
})
//获取新闻中心列表
app.post('/api/getNewsList', function (req, res) {
    res.send(db.newsList);
})
//获取信息列表
app.post('/api/getBoardList', function (req, res) {
  res.send(db.boardList);
})
//获取产品列表
app.post('/api/getProductList', function (req, res) {
  res.send(db.productList);
})
//获取产品列表
app.post('/api/getSliderList', function (req, res) {
  res.send(db.slides);
})