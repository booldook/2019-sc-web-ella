const express = require("express");
const router = express.Router();

/* Get */
router.get("/login", getLogin);
router.get("/search", getSearch);

/* Post */

/* Router CB */
function getLogin(req, res) {
	res.send("Admin Login");
}

function getSearch(req, res) {
	res.send("Admin Search");
}

module.exports = router;