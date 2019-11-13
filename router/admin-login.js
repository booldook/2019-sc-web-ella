const express = require("express");
const router = express.Router();
const { AdminLogin } = require("../model/AdminLogin");

/* REST */
router.post("/", postData);

/* Router CB */
async function postData(req, res) {
	let adminID = req.body.adminID;
	let adminPW = req.body.adminPW;
	let result = await AdminLogin.findAll({
		where: {adminID, adminPW}
	});
	res.json(result);
}

module.exports = router;