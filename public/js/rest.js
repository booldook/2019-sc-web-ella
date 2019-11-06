function saveFn(f) {
	if(f.username.value.trim() == "") {
		alert("이름을 입력하세요.");
		f.username.focus();
		return false;
	}
	return true;
}

$(".bt-up").click(function(){
	var id = $(this).parent().find(".sp-id").text();
	var username = $(this).parent().find(".sp-username").text();
	$("form[name='updateForm']").find("input[name='id']").val(id);
	$("form[name='updateForm']").find("input[name='username']").val(username).focus();
});