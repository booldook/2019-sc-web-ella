// 전역변수
var now = 0;
var interval;

// 이벤트
$(".bt-prev").click(function(){
	if(now > 0) now--;
	init();
}).hide();
$(".bt-next").click(function(){
	if(now < 4) now++;
	init();
});
$(".pager").click(function(){
	now = $(this).index();
	init();
});
$(".banners-wrap").mouseover(function(){
	clearInterval(interval);
});
$(".banners-wrap").mouseleave(function(){
	clearInterval(interval);
	interval = setInterval(intervalCb, 2000);
});
// Interval CallBack
function intervalCb() {
	now++;
	init();
}

/* 동작 */
// 시작할 때 한번 실행
(function () {
	pagerInit();
	interval = setInterval(intervalCb, 2000);
})();
// 이벤트 발생할 때 실행할 함수
function init() {
	ani();
	btInit();
	pagerInit();
}
// 애니메이션
function ani() {
	$(".banners").stop().animate({"left": (-720*now)+"px"}, 500, function(){
		if(now == 5) {
			now = 0;
			$(".banners").css("left", 0);
			pagerInit();
			btInit();
		}
	});
}
// 버튼 정렬
function btInit() {
	if(now == 0) {
		$(".bt-prev").hide();
		$(".bt-next").show();
	}
	else if(now == 4) {
		$(".bt-prev").show();
		$(".bt-next").hide();
	}
	else {
		$(".bt-prev").show();
		$(".bt-next").show();
	}
}
// 페이저 정렬
function pagerInit() {
	$(".pager").removeClass("active");
	$(".pager").eq(now).addClass("active");
}


