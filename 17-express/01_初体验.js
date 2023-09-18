const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.end("hello express");
});

app.listen(3002, () => {
  console.log("服务已经启动,端口3002正在监听中....");
});
