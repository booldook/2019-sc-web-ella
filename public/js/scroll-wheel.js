window.addEventListener("wheel", wheelFn, {passive: false});
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight();
	var delta = event.deltaY;
	var posY = event.pageY;
	var n = Math.floor(posY/hei);
	var pageCnt = $(".page").length;	//4
	if(delta > 0) (n < pageCnt - 1) ? wheelAni((n + 1) * hei, n, (n + 1)) : 0;	// 아래로 휠
	else (n > 0) ? wheelAni((n - 1) * hei, n, (n - 1)) : 0;	// 위로 휠
}
function wheelAni(pos, prevPage, nowPage) {
	console.log(prevPage, nowPage);
	$("html, body").stop().animate({"scrollTop": pos}, 1000, function(){

	});
}

$(".navi").click(function(){
	var n = $(this).index();
	var hei = $(window).outerHeight();
	wheelAni(n * hei);
});