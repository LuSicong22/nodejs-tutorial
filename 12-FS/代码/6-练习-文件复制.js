/**
 * 需求:
 *  复制"资料"文件夹下的"笑看风云.MP4"
 */

const fs = require("fs");

//方式一 readFile
let data = fs.readFileSync("../资料/笑看风云.mp4");
fs.writeFileSync("../资料/笑看风云-2.mp4", data);

//方式二 流式操作
const rs = fs.createReadStream("../资料/笑看风云-2.mp4");
const ws = fs.createWriteStream("../资料/笑看风云-2.mp4");

rs.on("data", (chunk) => {
  ws.write(chunk);
});
