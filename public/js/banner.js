function deleteList(id) {
	$("#deleteForm").find("input[name='id']").val(id);
	$("#deleteForm").submit();
}