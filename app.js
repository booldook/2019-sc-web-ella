// 모듈 Require
const express = require("express");
const app = express();
const path = require("path");
app.listen(3000, () => {
	console.log("http://127.0.0.1:3000");
});

// 사용자 모듈 Require

// 초기 Express 설정
app.locals.pretty = true;
app.use("/", express.static(path.join(__dirname, "public")));
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));





