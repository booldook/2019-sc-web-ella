/* Ready - 페이지가 로드될 때 일어날 일들 */
// 상단 배너 가리기
var topClose = $.cookie("top-banner-close");
if(topClose) $(".top-banner").hide();
$("body").click(function(){
	$(".sch-layer").hide();
});


/* header */
/* header의 x 버튼 클릭 */
/*
// cookie를 사용하지 않고 그냥 닫을 때- 새로고침 하면 보여진다.
$("#bt-top-close").click(function(){
	$(".top-banner").stop().slideUp(300);
});
*/
// cookie로 제한시간을 10분 줄 때 
$("#bt-top-close").click(function(e){
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
	$(this).parent().parent().find(".sel-top-img").attr("src", $(this).find("img").attr("src"));
	$(this).parent().parent().find(".sel-top-txt").text($(this).find("span").text());
	$(this).parent().prev().trigger("click");
});

// Search
$(".sch-txt").click(function(e){
	e.stopPropagation();
	$(".sch-layer").show();
});
$(".sch-layer").click(function(e){
	e.stopPropagation();
});

// 메인 네비게이션
$(".navi-under").mouseenter(function(){
	$(this).find(".subs").css({"visibility": "visible"}).stop().animate({"top": "43px", "opacity": 1}, 300);
});
$(".navi-under").mouseleave(function(){
	$(this).find(".subs").stop().animate({"top": "143px", "opacity": 0}, 300, function(){
		$(this).css({"visibility": "hidden"});
	});
});
$(".navi-show").mouseenter(function(){
	$(this).find(".subs").css({"visibility": "visible"}).stop().animate({"opacity": 1}, 300);
});
$(".navi-show").mouseleave(function(){
	$(this).find(".subs").stop().animate({"opacity": 0}, 300, function(){
		$(this).css({"visibility": "hidden"});
	});
});


// 배너 - (fade, slide(전체), slide(하나씩), slide(세로))
// 메인 배너
(function(){
	// 초기화
	$(".main-ban").append($(".main-ban > li").eq(0).clone()).css({"width": "400%"});
	var interval;
	var len = $(".main-ban > li").length;
	var speed = 500;
	var delay = 3000;
	var now = 0;
	// 이벤트
	interval = setInterval(intervalFn, delay);
	$(".pager-prev").click(prevFn);
	$(".pager-next").click(nextFn);
	$(".main-bans").mouseover(hoverFn).mouseleave(leaveFn);
	// 이벤트 드리븐
	function intervalFn() {
		if(now == len - 1) {
			now = 1;
			$(".main-ban").css({"left": 0});
		}
		else now++;
		ani();
	}
	function prevFn() {
		if(now > 0) {
			now--;
			ani();
		}
	}
	function nextFn() {
		if(now < len - 2) {
			now++;
			ani();
		}
	}
	function hoverFn() {
		clearInterval(interval);
	}
	function leaveFn() {
		clearInterval(interval);
		interval = setInterval(intervalFn, delay);
	}
	//동작 함수
	function ani() {
		$(".main-ban").stop().animate({"left": -100*now+"%"}, speed);
		if(now == 0 || now == len - 1) {
			$(".pager-prev").hide();
			$(".pager-next").show();
		}
		else if(now == len - 2) {
			$(".pager-prev").show();
			$(".pager-next").hide();
		}
		else {
			$(".pager-prev").show();
			$(".pager-next").show();
		}
	}
})();










var $grid = $('.grid-wrap').imagesLoaded(function() {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});
