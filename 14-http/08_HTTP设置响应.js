const http = require("http");

const server = http.createServer((request, response) => {
  //设置响应状态码
  response.statusCode = 203;
  response.statusCode = 404;

  //设置响应状态的描述
  response.statusMessage = "iLoveyou";

  //设置响应头
  response.setHeader("content-type", "text/html;charset=utf-8");
  response.setHeader("Server", "Node.js");
  response.setHeader("myHeader", "test test test");
  response.setHeader("test", ["a", "b", "c"]);

  //设置响应体
  response.write("iloveyou");
  response.write("iloveyou");
  response.write("iloveyou");

  response.end("response");
});

server.listen(9001, () => {
  console.log("服务已经启动....");
});
