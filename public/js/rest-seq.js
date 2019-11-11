function validateInput(f) {
	if(f.stdname.value.trim() == "") {
		alert("이름을 입력하세요.");
		f.stdname.focus();
		return false;
	}
	if(f.kor.value < 0 || f.kor.value > 100 || f.kor.value == "") {
		alert("국어점수를 올바로 입력하세요.");
		f.kor.focus();
		return false;
	}
	if(f.eng.value < 0 || f.eng.value > 100 || f.eng.value == "") {
		alert("영어점수를 올바로 입력하세요.");
		f.eng.focus();
		return false;
	}
	if(f.math.value < 0 || f.math.value > 100 || f.math.value == "") {
		alert("수학점수를 올바로 입력하세요.");
		f.math.focus();
		return false;
	}
	return true;
}

function saveFn(f) {
	return validateInput(f);
}

function updateFn(f) {
	if(f.id.value.trim() == "") {
		alert("수정을 하려면 아래의 리스트에서 수정할 데이터의 수정버튼을 눌러주세요.");
		return false;
	}
	return validateInput(f);
}

$(".bt-up").click(function(){
	$("form[name='updateForm']").find("input[name='stdname']").prop("disabled", false);
	$("form[name='updateForm']").find("input[name='kor']").prop("disabled", false);
	$("form[name='updateForm']").find("input[name='eng']").prop("disabled", false);
	$("form[name='updateForm']").find("input[name='math']").prop("disabled", false);
	$("form[name='updateForm']").find("button").prop("disabled", false);
	var id = $(this).parent().find(".sp-id").text();
	var stdname = $(this).parent().find(".sp-stdname").text();
	var kor = $(this).parent().find(".sp-kor").text().replace("국어: ", "");
	var eng = $(this).parent().find(".sp-eng").text().replace("영어: ", "");
	var math = $(this).parent().find(".sp-math").text().replace("수학: ", "");
	$("form[name='updateForm']").find("input[name='id']").val(id);
	$("form[name='updateForm']").find("input[name='stdname']").val(stdname).focus();
	$("form[name='updateForm']").find("input[name='kor']").val(kor);
	$("form[name='updateForm']").find("input[name='eng']").val(eng);
	$("form[name='updateForm']").find("input[name='math']").val(math);
});

$(".bt-del").click(function(){
	var id = $(this).parent().find(".sp-id").text();
	if(confirm("정말로 삭제하시겠습니까?")) {
		ajax("/rest-seq", "delete", {id: id}, function(res){
			(res > 0) ? location.href = "/rest-seq" : alert("삭제에 실패했습니다.");
		});
	}
});