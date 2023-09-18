const http = require("http");

const server = http.createServer((request, response) => {
  //获取请求的方法
  console.log(request.method);
  //获取请求的url
  console.log(request.url);
  //获取HTTP协议的版本号
  console.log(request.httpVersion);
  //获取HTTP的请求头
  console.log(request.headers);

  response.end("hello!");
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
