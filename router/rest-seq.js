const express = require("express");
const router = express.Router();

const Sequelize = require("sequelize");	//<script src="../js/fx-slide.js"></script>
const sequelize = new Sequelize({
	host: "localhost",
	port: 3306,
	database: "ella",
	username: "ella",
	password: "000000",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

/*
sequelize.authenticate().then(() => {
	console.log('Connection has been established successfully.');
}).catch(err => {
	console.error('Unable to connect to the database:', err);
});
*/
(async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	}
	catch (err) {
		console.error('Unable to connect to the database:', err);
	}
})();


/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);


/* Router CB */
async function getData(req, res) {

}

async function postData(req, res) {
	
}

async function putData(req, res) {
	
}

async function deleteData(req, res) {
	
}


module.exports = router;