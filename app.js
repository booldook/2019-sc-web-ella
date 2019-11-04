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


// 관리자 Router
app.get(["/admin/:type", "/admin"], (req, res) => {
	let type = req.params.type ? req.params.type : "login";
	switch(type) {
		case "login":
			adminLogin(req, res);
			break;
		default:
			res.send("페이지를 찾을수 없습니다.");
			break;
	}
});

function adminLogin(req, res) {
	res.render("admin/login");
}





