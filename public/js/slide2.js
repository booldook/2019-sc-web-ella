var now = 0;
$(".bt-prev").click(function(){
	if(now > 0) now--;
	ani();
});
$(".bt-next").click(function(){
	if(now < 4) now++;
	ani();
});
function ani() {
	$(".banners").stop().animate({"left": (-720*now)+"px"}, 500, function(){
		if(now == 0) {

		}
		else if(now == 4) {

		}
		else {
			
		}
	});
}

