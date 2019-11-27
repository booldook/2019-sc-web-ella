const express = require("express");
const router = express.Router();
const mt = require("../modules/multer-conn");
const path = require("path");
const { AdminBanner } = require(path.join(__dirname, "../model/AdminBanner"));
const util = require(path.join(__dirname, "../modules/util"));

/* REST */
router.get("/:type", getData);
router.post("/:type", mt.upload.single("src"), postData);

/* Router CB */
async function getData(req, res, next) {
	let type = req.params.type;
	let vals = {
		leftNavs: [
			{link: "/admin/banner/top", title: "상단 배너 관리"},
			{link: "/admin/banner/bottom", title: "하단 배너 관리"},
		],
	}
	switch(type) {
		case "top":
			res.render("admin/bannerTop", vals);
			break;
		case "bottom":
				res.render("admin/bannerBottom", vals);
			break;
		default:
			next();
			break;
	}
}

async function postData(req, res, next) {
	let type = req.params.type;
	let title = req.body.title;
	let position = req.body.position;
	let link = req.body.link;
	let desc = req.body.desc;
	let src = "";
	if(req.file) src = req.file.filename;

	switch(type) {
		case "top":
			
			break;
		case "bottom":
			break;
		default:
			next();
			break;
	}
}




module.exports = router;