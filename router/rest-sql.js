const express = require("express");
const router = express.Router();

const sql = require("./modules/mysql-conn");

/* GET */
router.get("/", getForm);

/* REST */
router.get("/sql", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);

/* Router CB */
function getForm(req, res) {
	res.render("rest/restForm");
}

function getData(req, res) {
	res.send("getData");
}

function postData(req, res) {
	(async () => {
		let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVals = [username];
		let result = await 
	})();
}

function putData(req, res) {
	res.send("putData");
}

function deleteData(req, res) {
	res.send("deleteData");
}


module.exports = router;