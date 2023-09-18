const http = require("http");

const server = http.createServer((request, response) => {
  response.end("hello!");
});

server.listen(9000, () => {
  console.log("服务已经启动....");
});
