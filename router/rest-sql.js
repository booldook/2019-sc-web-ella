const express = require("express");
const router = express.Router();

const {mysql, sqlExec} = require("../modules/mysql-conn");

/* GET */
router.get("/", getForm);

/* REST */
router.get("/sql", getData);
router.post("/sql", postData);
router.put("/sql", putData);
router.delete("/sql", deleteData);

/* Router CB */
function getForm(req, res) {
	(async () => {
		let sql = "SELECT * FROM rest ORDER BY id DESC";
		let result = await sqlExec(sql);
		//res.json(result[0]);
		res.render("rest/restForm", {users: result[0]});
	})();
}

function getData(req, res) {
	res.send("getData");
}

function postData(req, res) {
	(async () => {
		let username = req.body.username;
		let sql = "INSERT INTO rest SET username=?";
		let sqlVals = [username];
		let result = await sqlExec(sql, sqlVals);
		res.json(result);
	})();
}

function putData(req, res) {
	res.send("putData");
}

function deleteData(req, res) {
	res.send("deleteData");
}


module.exports = router;