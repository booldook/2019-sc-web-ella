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
			var $f = $("form[name='bannerTopForm']");
			$(".wr-title").html('<span class="text-primary"> - 배너 수정</span>');
			$f.find("input[name='id']").val(res.id);
			$f.find("input[name='title']").val(res.title);
			$f.find("input[name='link']").val(res.link);
			$f.find("textarea[name='desc']").val(res.desc);
			$f.find("select[name='position']").val(res.position);
			$f.find(".src-name").html(res.src);
			$f.find(".btn-primary").addClass("btn-success").removeClass(".btn-primary").html('수정');
			$f.find("input[name='_method']").val('put');
		},
		error(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}