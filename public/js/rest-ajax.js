/* Event */
$(document).ready(getData);
$("#bt-wr").click(postData);
$("#bt-up").click(putData);



/* CRUD */
function getData() {
	ajax("/rest-ajax", "get", {}, renderData);
}
function postData() {
	var username = $("#username-wr").val().trim();
	if(username == "") {
		alert("이름을 입력하세요.");
		$("#username-wr").focus();
		return false;
	}
	ajax("/rest-ajax", "post", {username: username}, function(res){
		if(res.code == 200) getData();
		else alert("통신에 실패하였습니다.");
		$("#username-wr").val('');
	});
}
function putData() {
	var id = $("#id-up").val();
	var username = $("#username-up").val();
	ajax("/rest-ajax", "put", {id: id, username: username}, function(res){
		if(res.code == 200) getData();
		else alert("통신에 실패하였습니다.");
		$("#id-up").val('');
		$("#username-up").val('').prop("disabled", true);
		$("#bt-up").prop("disabled", true);
	});
}


/* DOM */
function chgData(btn) {
	var id = $(btn).parent().find(".sp-id").text();
	var username = $(btn).parent().find(".sp-username").text();
	$("#id-up").val(id);
	$("#username-up").prop("disabled", false).val(username);
	$("#bt-up").prop("disabled", false);
}
function revData(btn) {

}
function renderData(res) {
	var html = '';
	for(var i in res) {
		html += '<li class="m-1 p-3 d-flex border rounded">';
		html += '<span class="sp-id mr-2">'+res[i].id+'</span>';
		html += '<span class="sp-username mr-2">'+res[i].username+'</span>';
		html += '<button class="btn btn-danger btn-sm mr-2" onclick="delData(this);">삭제</button>';
		html += '<button class="btn btn-success btn-sm mr-2" onclick="chgData(this);">수정</button>';
		html += '</li>';
	}
	$(".lists").html(html);
}