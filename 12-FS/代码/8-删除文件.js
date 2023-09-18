const fs = require("fs");

// 方式一 unlink
fs.unlink("./观书有感.txt", (err) => {
  if (err) {
    console.log("删除失败");
    return;
  }
  console.log("删除成功");
});

// 方式二 rm (node >v14.4)
fs.rm("./论语.txt", (err) => {
  if (err) {
    console.log("删除失败");
    return;
  }
  console.log("删除成功");
});
