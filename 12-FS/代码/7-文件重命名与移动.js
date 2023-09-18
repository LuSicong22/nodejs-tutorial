const fs = require("fs");

// 重命名文件
fs.rename("./座右铭.txt", "./论语.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
});

// 移动文件
fs.rename("./test.txt", "../资料/data.txt", (err) => {
  if (err) {
    console.log("操作失败");
    return;
  }
  console.log("操作成功");
});
