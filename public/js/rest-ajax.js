/* Event */
$(document).ready(getData);
$("#bt-wr").click(postData);


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
	});
}

function renderData(res) {
	var html = '';
	for(var i in res) {
		html += '<li class="m-1 p-3 d-flex border rounded">';
		html += '<span class="sp-id mr-2">'+res[i].id+'</span>';
		html += '<span class="sp-username mr-2">'+res[i].username+'</span>';
		html += '<button class="bt-del btn btn-danger btn-sm mr-2">삭제</button>';
		html += '<button class="bt-up btn btn-success btn-sm mr-2">수정</button>';
		html += '</li>';
	}
	$(".lists").html(html);
}