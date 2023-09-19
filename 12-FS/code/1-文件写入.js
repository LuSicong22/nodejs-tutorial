// 引入fs模块
const fs = require("fs");

// 写入文件
fs.writeFile("./座右铭.txt", "三人行,则必有我师焉", (err) => {
  if (err) {
    console.log("写入失败");
    return;
  }
  console.log("写入成功");
});

// 同步写入
fs.writeFileSync("./test.txt", "测试内容");
