const fs = require("fs");
const path = require("path");

// resolve
console.log(path.resolve(__dirname, "./index.html"));

// sep 获取操作系统的路径分隔符
console.log(path.sep); // windows \ Linux /

// parse
let str = "Users/lusiconh/Learn/";
console.log(path.parse(str));

// basename
console.log(path.basename(str));

// dirname
console.log(path.dirname(str));

// extname
console.log(path.extname(str));
