/* 전역변수 */
var now = 0;
var depth = 10;

/* 이벤트 */
$(".pager").click(function(){
	now = $(this).index();
	$(".banner").eq(now).css({"z-index": depth++, "opacity": 0});
	$(".banner").eq(now).stop().animate({"opacity": 1}, 1000);
	$(".pager").removeClass("active");
	$(this).addClass("active");
});
$(".pager").eq(now).trigger("click");

/* 동작 */




