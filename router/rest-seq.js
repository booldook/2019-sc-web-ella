/* // ES5 - Class
const User3 = (function(){
	function User3() {
		this.model = new Model(); // extends 역할을 한다.
	}
	return User3;
})(); */


const express = require("express");
const router = express.Router();
const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class Sample extends Model {}
// Sample.init({테이블정보},{옵션});
Sample.init({
	stdname: { type: Sequelize.STRING, allowNull: false },
	kor: { type: Sequelize.TINYINT, allowNull: true },
	math: { type: Sequelize.TINYINT, allowNull: true },
	eng: { type: Sequelize.TINYINT, allowNull: true }
},{
	sequelize,
	modelName: "scores"
});
Sample.sync({force: true});



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