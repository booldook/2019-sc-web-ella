window.addEventListener("wheel", wheelFn, {passive: false});
/*
document.querySelectorAll(".page").forEach(function(page, key) {
	page.addEventListener("wheel", wheelFn, {passive: false});
});
*/
function wheelFn(){
	event.preventDefault();
	event.stopPropagation();
	var hei = $(window).outerHeight();
	var delta = event.deltaY;
	var posY = event.pageY;
	var n = Math.floor(posY/hei);
	var tar = 0;
	if(delta > 0) {
		// 아래로 휠
	}
	else {
		// 위로 휠
	}


	if(delta > 0) $("html, body").stop().animate({"scrollTop": hei}, 300);
	else $("html, body").stop().animate({"scrollTop": 0}, 300);
}
