/* Ready - 페이지가 로드될 때 일어날 일들 */
// 상단 배너 가리기
var topClose = $.cookie("top-banner-close");
if(topClose) $(".top-banner").hide();


/* header */
/* header의 x 버튼 클릭 */
/*
// cookie를 사용하지 않고 그냥 닫을 때- 새로고침 하면 보여진다.
$("#bt-top-close").click(function(){
	$(".top-banner").stop().slideUp(300);
});
*/
// cookie로 제한시간을 10분 줄 때 
$("#bt-top-close").click(function(){
	$(".top-banner").stop().slideUp(300);
	var d = new Date();
	d.setTime(d.getTime() + 10*60*1000);	// 10분동안 쿠키 유지
	$.cookie("top-banner-close", true, {expires: d});
});

// 언어, 통화 선택
$(".sel-top .fa-angle-down").click(function(){
	$(this).next().stop().slideToggle(300);
	$(this).toggleClass("fa-angle-down fa-angle-up");
});
$(".sel-top li").click(function(){
	$(this).parent().parent().children(".sel-top-img").attr("src", $(this).children("img").attr("src"));
	$(this).parent().parent().children(".sel-top-txt").text($(this).children("span").text());
	$(this).parent().prev().trigger("click");
});






var $grid = $('.grid-wrap').imagesLoaded(function() {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});
