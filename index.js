const http = require('http');

// 创建一个web server对象
const server = http.createServer();

// 添加request handler
// 当HTTP request到达服务器时，node调用这个request handler来处理请求
server.on('request', function(request, response) {
  console.log('on request');
});

// 服务需要监听一个端口来响应请求
server.listen(3000,()=>{
  console.log('Server listening port 3000');
});
