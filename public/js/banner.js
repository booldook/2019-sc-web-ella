function deleteList(id) {
	$("#deleteForm").find("input[name='id']").val(id);
	$("#deleteForm").submit();
}

function chgData(id) {
	$.ajax({
		url: "/admin/banner/top",
		data: {id: id},
		success: function(res) {
			console.log(res);
		},
		error(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}