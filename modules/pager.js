const pagerMaker = (obj) => {
	if(obj.grpCnt === undefined) obj.grpCnt = 5;
	if(obj.divCnt === undefined) obj.divCnt = 3;
	if(obj.totCnt === undefined) return false;
	if(obj.page === undefined) return false;
	obj.cnt = Math.ceil(obj.totCnt / obj.grpCnt); // 전체 페이지 개수
	obj.stn = 0; // 세트중에 시작페이지
	obj.edn = 0; // 세트중에 마지막페이지
	obj.prev = 0; // << 를 클릭시 나타날 전세트 페이지 
	obj.next = 0; // >> 를 클릭시 나타날 전세트 페이지
	obj.stRec = (obj.page - 1) * obj.grpCnt;
	obj.prevShow = false;	// << 회색(false), 파란색(true)
	obj.lastShow = false;	// >> 회색(false), 파란색(true)
	obj.lastIndex = (Math.ceil(obj.cnt / obj.divCnt) - 1); // 페이지 세트의 마지막 index
	obj.nowIndex = (Math.ceil(obj.page / obj.divCnt) - 1); // 현재페이지 세트의 index
	obj.stn = obj.nowIndex * obj.divCnt + 1; // 세트의 시작페이지 값
	if (obj.cnt < obj.stn + obj.divCnt - 1) obj.edn = obj.cnt;		// 세트의 마지막 페이지 값
	else obj.edn = obj.stn + obj.divCnt - 1;
	if (obj.nowIndex > 0) {
		obj.prevShow = true;
		obj.prev = obj.stn - 1;
	}
	if (obj.lastIndex > obj.nowIndex) {
		obj.lastShow = true;
		obj.next = obj.edn + 1;
	}
	return obj;
}

module.exports = {
	pagerMaker
}