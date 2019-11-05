const express = require("express");
const router = express.Router();

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
	res.send("postData");
}

function putData(req, res) {
	res.send("putData");
}

function deleteData(req, res) {
	res.send("deleteData");
}


module.exports = router;