const express = require("express");
const router = express.Router();

/* Get */
router.get("/login", getLogin);
router.get("/search", getSearch);

/* Post */

/* Router CB */
function getLogin(req, res) {
	res.send("Front Login");
}

function getSearch(req, res) {
	res.send("Front Search");
}

module.exports = router;