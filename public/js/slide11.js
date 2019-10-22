// 전역변수
var now = 0;
var interval;
var speed = 500;
var delay = 2000;
var cnt = 0;	// Ajax으로 가져온 슬라이드 갯수
var html = '';

// 시작
$.ajax({ url: "../json/slide.json", success: slideInit });

// 이벤트

// 동작
function slideInit(res) {
	cnt = res.slides.length;
	for(var i in res.slides) {
		html  = '<li class="banner">';
		html += '<img src="'+res.slides[i].src+'" alt="'+res.slides[i].desc+'" class="banner-img">';
		html += '<h2 class="banner-cont">'+res.slides[i].desc+'</h2>';
		html += '</li>';
		$(".banners").append(html);
		html  = '<div class="pager">●</div>';
		$(".pagers").append(html);
	}
	$(".banners").append($(".banner").eq(0).clone());
}



/*


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

//동작
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
*/

