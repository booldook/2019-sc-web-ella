function saveFn(f) {
	if(f.username.value.trim() == "") {
		alert("이름을 입력하세요.");
		f.username.focus();
		return false;
	}
	return true;
}