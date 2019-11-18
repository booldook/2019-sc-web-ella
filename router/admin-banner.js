const express = require("express");
const router = express.Router();
const path = require("path");
const { AdminBanner } = require(path.join(__dirname, "../model/AdminBanner"));
const util = require(path.join(__dirname, "../modules/util"));


/* REST */
router.get("/:type", getData);

/* Router CB */
async function getData(req, res, next) {
	let type = req.params.type;
	switch(type) {
		case "top":
			res.render("admin/bannerTop");
			break;
		case "bottom":
				res.render("admin/bannerBottom");
			break;
		default:
			next();
			break;
	}
}

module.exports = router;