/* 전역변수 */
var now = 4;			// 페이드 될 LI
var depth = 10;		// 계속 증가될 z-index
var speed = 1000;	// opacity 속도
var delay = 3000;	// Animation Delay
var interval;

/* 이벤트 */
interval = setInterval(intervalCb, delay);
function intervalCb() {
	now == 4 ? now = 0 : now++;
	$(".banner").eq(now).css({"z-index": depth++, "opacity": 0});
	$(".banner").eq(now).stop().animate({"opacity": 1}, speed);
}

/* 동작 */




