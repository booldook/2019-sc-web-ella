(function(){
	var now = 1;
	var gap = 2000;
	var speed = 500;
	var ani = function(){
		$(".banners").stop().animate({"top": (-380*now)+"px"}, speed, function(){
			if(now == 5) {
				now = 1;
				$(this).css({"top": 0});
			}
			else now++;
		});
	}
	var interval = setInterval(ani, gap);
})();