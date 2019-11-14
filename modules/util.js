module.exports.zp = n => {
	n<10 ? n = "0" + n : n = n;
	return n;
}
module.exports.dspDate = (d, type) => {
	var type = typeof type !== 'undefined' ?  type : "0";
	var monthArr = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
	var year = d.getFullYear() + "년 ";	// 2019
	var month = monthArr[d.getMonth()] + " "; // 7 (0 ~ 11)
	var day = d.getDate() + "일 "; // 1 ~ 31
	var hour = d.getHours() + "시 "; // 0 ~ 23
	var min = d.getMinutes() + "분 "; // 0 ~ 59
	var sec = d.getSeconds() + "초 "; // 0 ~ 59
	var returnStr;
	/* 
	type 0: 2019-08-11 09:08:12 (ISO datetime 표기법)
	type 1: 2019년 8월 11일 9시 8분 11초
	type 2: 2019년 8월 11일 9시 8분
	type 3: 2019년 8월 11일 9시
	type 4: 2019년 8월 11일
	type 5: 8월 11일
	type 6: 11시 11분 12초
	*/
	switch(type) {
		case 1 :
			returnStr = year + month + day + hour + min + sec;
			break;
		case 2 :
			returnStr = year + month + day + hour + min;
			break;
		case 3 :
			returnStr = year + month + day + hour;
			break;
		case 4 :
			returnStr = year + month + day;
			break;
		case 5 :
			returnStr = month + day;
			break;
		case 6 :
			returnStr = hour + min + sec;
			break;
		default :
			// 2019-09-03 14:08:09
			returnStr = d.getFullYear() + '-' + module.exports.zp(d.getMonth() + 1) + '-' + module.exports.zp(d.getDate()) + " " + module.exports.zp(d.getHours()) + ":" + module.exports.zp(d.getMinutes()) + ":" + module.exports.zp(d.getSeconds());
			break;
	}
	return returnStr;
}

module.exports.alertLocation = (obj) => {
	var html = '<meta charset="utf-8">';
	html += '<script>';
	html += 'alert("'+obj.msg+'");';
	html += 'location.href = "'+obj.loc+'";';
	html += '</script>';
	return html;
}

module.exports.alertAdmin = () => {
	var html = '<meta charset="utf-8">';
	html += '<script>';
	html += 'alert("정상적인 접근이 아닙니다.");';
	html += 'location.href = "/";';
	html += '</script>';
	return html;
}

module.exports.nullChk = (val) => {
	if(val !== undefined && val !== null && val !== "") return true;
	else return false;
}

module.exports.iconChk = (dt, file) => {
	const obj = {};
	if(module.exports.nullChk(file)) obj[file.split(".").pop()] = true;
	var tsFile = new Date(dt).getTime();
	var tsNow = new Date().getTime() - (24 * 60 * 60 * 1000);	//현재시간 - 24시
	if(tsFile >= tsNow) obj.new = true;
	return obj;
}

module.exports.telNum = ["010", "011", "016", "017", "018", "019", "02", "051", "053", "032", "062", "042", "052", "044", "031", "033", "043", "041", "063", "061", "054", "055", "064"];

module.exports.adminChk = (obj) => {
	if(module.exports.nullChk(obj)) {
		if(obj.grade == 9) return true;
		else return false;
	}
	else {
		return false;
	}
}
