getData();
function getData() {
	ajax("/rest-ajax", "get", {}, renderData);
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