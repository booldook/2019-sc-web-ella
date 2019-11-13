const {Sequelize, sequelize} = require("../modules/sequelize-conn");

/* Model 작성 */
const Model = Sequelize.Model;
class AdminLogin extends Model {}
AdminLogin.init({
	adminID: { type: Sequelize.STRING, allowNull: false },
	adminPW: { type: Sequelize.STRING, allowNull: false },
	grade: { type: Sequelize.TINYINT, allowNull: false, defaultValue: 1 }
},{
	sequelize,
	modelName: "admins",
	// timestamps: false
});
// force: true -> 기존에 테이블이 존재하면 삭제하고 다시만든다. 절대 쓰지말자
AdminLogin.sync({force: true});

module.exports = {AdminLogin}
