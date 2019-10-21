// 전역변수
var now = 0;

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

// 동작
function init() {
	ani();
	btInit();
	pagerInit();
}
function ani() {
	$(".banners").stop().animate({"left": (-720*now)+"px"}, 500);
}
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

