# demo
v-router+vuex+axios
> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# axios
  采用axios来代替vue-resource <br>
  axios本身并不能使用Vue.use(),因此需要将其封装成插架,采用VUE里面的install进行封装<br>
  ```
  export default {
    install(Vue, name = 'http') {
        //Object.defineProperty(Vue.prototype, name, {value: axios});
        Vue.prototype[name] = {
            get,
            post
        }
    }
  ```
  然后需要在main.js里面使用：<br>
  ```
  import AxiosPlugin from '../src/servers/axios';//引入文件
  Vue.use(AxiosPlugin);
  ```
# 自定义使用node搭建模拟服务器(express)
需要安装express+body-parser<br>
```
var express = require("express");
var bodyParser = require('body-parser');
var http = require('http').createServer(app);
var db = require('./db');
app.set('port', process.env.PORT || 19000);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
```
```
//监听端口是否启动
http.listen(app.get('port'), function () {
  console.log('server listening on port' + app.get('port'));
});
```
```
//实际使用
app.post('/api/getNewsList', function (req, res) {
    res.send(db.newsList);
})
```
搭建模拟服务器需要设置反向代理:需要安装http-proxy-middleware<br>
在index.js里面找到proxyTable,将其设置成下面<br>
  ```
  //搭建端口，反向代理
  proxyTable: {
    '/api': 'http://localhost:19000'
  }
  ```


