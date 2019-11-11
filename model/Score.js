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

module.exports = {Score}