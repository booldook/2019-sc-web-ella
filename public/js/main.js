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

// fx-slide : 메인 배너
new FxSlide({
	slides: $(".main-ban"), 
	cnt: 1, 
	speed: 1000,
	delay: 4000,
	pager: $(".pagers")
});
new FxSlide({
	slides: $(".best-items"), 
	cnt: 5, 
	prev: $("#best-prev"),
	next: $("#best-next"),
	direction: "toRight",
	autoplay: false
});
new FxSlide({
	slides: $("#seller-slide"), 
	cnt: 3, 
	prev: $("#seller-prev"),
	next: $("#seller-next"),
});
new FxSlide({
	slides: $("#seller-slide2"), 
	cnt: 3, 
	prev: $("#seller-prev2"),
	next: $("#seller-next2"),
	direction: "toRight"
});
new FxSlide({
	slides: $("#choice-wrap"), 
	cnt: 5, 
	prev: $("#choice-prev"),
	next: $("#choice-next")
});
new FxSlide({
	slides: $("#choice-wrap1"), 
	cnt: 5, 
	prev: $("#choice-prev1"),
	next: $("#choice-next1")
});
new FxSlide({
	slides: $("#choice-wrap2"), 
	cnt: 5, 
	prev: $("#choice-prev2"),
	next: $("#choice-next2")
});
new FxSlide({
	slides: $(".brand-items"), 
	cnt: 5, 
	prev: $("#brand-prev"),
	next: $("#brand-next"),
	direction: "toRight"
});
new FxSlide({
	slides: $(".insta-items"), 
	cnt: 5, 
	prev: $("#insta-prev"),
	next: $("#insta-next"),
});

$(".choice-navi").click(function(){
	var num = $(this).index();
	$(".choice-navi").removeClass("active");
	$(this).addClass("active");
	$(".choice-wrap").hide();
	$(".choice-wrap").eq(num).show();
});






// 배너 - (fade, slide(전체), slide(하나씩), slide(세로))
// 메인 배너
/* (function(){
	var now = 0;
	var speed = 500;
	var delay = 3000;
	var interval;
	var arr = [];
	var $li = $(".main-ban").children();
	var len = $li.length;
	init();
	interval = setInterval(ani, delay, "-200%");
	function init() {
		arr[0] = (now == 0) ? len - 1 : now - 1;	// prev
		arr[1] = now;	// now
		arr[2] = (now == len - 1) ? arr[2] = 0 : arr[2] = now + 1;	// next
		$(".main-ban").empty();
		$(".main-ban").append($li[arr[0]]);
		$(".main-ban").append($li[arr[1]]);
		$(".main-ban").append($li[arr[2]]);
		$(".main-ban").css({"left": "-100%"});
	}	
	function ani(tar) {
		$(".main-ban").stop().animate({"left": tar}, speed, function(){
			(tar == 0) ? (now == 0) ? now = len - 1: now-- : (now == len - 1) ? now = 0 : now++;
			init();
		});
	}
	$(".pager-prev").click(function(e){
		ani(0);
	});
	$(".pager-next").click(function(e){
		ani("-200%");
	});
	$(".main-bans").mouseover(function(){
		clearInterval(interval);
	}).mouseleave(function(){
		clearInterval(interval);
		interval = setInterval(ani, delay, "-200%");
	});
})(); */










var $grid = $('.grid-wrap').imagesLoaded(function() {
	$grid.masonry({
		itemSelector: '.grid-item',
		columnWidth: '.grid-sizer',
		percentPosition: true
	});
});
