const express = require("express");
const router = express.Router();
const path = require("path");
const { AdminLogin } = require(path.join(__dirname, "../model/AdminLogin"));
const util = require(path.join(__dirname, "../modules/util"));

/* REST */
router.post("/", postData);

/* Router CB */
async function postData(req, res) {
	let adminID = req.body.adminID;
	let adminPW = req.body.adminPW;
	let result = await AdminLogin.findAll({
		where: {adminID, adminPW}
	});
	if(result.length == 1 && result[0].grade > 1) res.render("admin/main.pug");
	else res.send(util.alertAdmin());
}

module.exports = router;