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
class Score extends Model {}
// Sample.init({테이블정보},{옵션});
Score.init({
	stdname: { type: Sequelize.STRING, allowNull: false },
	kor: { type: Sequelize.TINYINT, allowNull: true },
	math: { type: Sequelize.TINYINT, allowNull: true },
	eng: { type: Sequelize.TINYINT, allowNull: true }
},{
	sequelize,
	modelName: "scores",
	// timestamps: false
});
// force: true -> 기존에 테이블이 존재하면 삭제하고 다시만든다. 절대 쓰지말자
Score.sync({force: false});


/* REST */
router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);


/* Router CB */
async function getData(req, res) {
	let result = await Score.findAll({
		order: [["id", "DESC"]]
	});
	res.render("rest/seqForm.pug", {datas: result});
}

async function postData(req, res) {
	let result = await Score.create({
		stdname: req.body.stdname,
		kor: req.body.kor,
		eng: req.body.eng,
		math: req.body.math,
	});
	res.redirect("/rest-seq");
}

async function putData(req, res) {
	let result = await Score.update({
		stdname: req.body.stdname,
		kor: req.body.kor,
		eng: req.body.eng,
		math: req.body.math,
	}, {
		where: {
			id: req.body.id
		}
	});
	res.redirect("/rest-seq");
}

async function deleteData(req, res) {
	let result = await Score.destroy({
		where: {
			id: req.body.id
		}
	});
	res.json(result);
}


module.exports = router;