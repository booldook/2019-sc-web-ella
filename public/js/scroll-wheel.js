window.addEventListener("wheel", wheelFn, {passive: false});
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight();
	var delta = event.deltaY;
	var posY = event.pageY;
	var n = Math.floor(posY/hei);
	var pageCnt = $(".page").length;	//4
	if(delta > 0) (n < pageCnt - 1) ? wheelAni((n + 1) * hei): "";	// 아래로 휠
	else (n > 0) ? wheelAni((n - 1) * hei) : "";	// 위로 휠
}
function wheelAni(pos) {
	$("html, body").stop().animate({"scrollTop": pos}, 1000);
}
