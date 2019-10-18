var now = 0;
$(".bt-prev").click(function(){
	if(now > 0) now--;
	ani();
}).hide();
$(".bt-next").click(function(){
	if(now < 4) now++;
	ani();
});
function ani() {
	$(".banners").stop().animate({"left": (-720*now)+"px"}, 500);
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

