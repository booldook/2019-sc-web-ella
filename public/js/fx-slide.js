/*
var FxSlide = (function(){
	function FxSlide(obj) {

	}
	return FxSlide;
})();

// 사용자가 쓰는 법
var obj = {
	slides: $(".slides"), // 필수
	speed: 500,	// 애니메이션 속도
	delay: 3000,	// 딜레이
	cnt: 1,	// 한번에 보이는 이미지 수
}
var slide1 = new FxSlide(obj);
*/
var FxSlide = (function(){
	function FxSlide(obj) {
		this.now = 0;
		this.slides = $(obj.slides);
		this.slide = this.slides.children();
		this.len = this.slide.length;
		this.cnt = obj.cnt ? Number(obj.cnt) : 1;
		this.speed = obj.speed ? Number(obj.speed) : 500;
		this.delay = obj.delay ? Number(obj.delay) : 3000;
		this.interval = null;
		this.arr = [];
		this.init();
	}
	FxSlide.prototype.init = function() {
		this.arr = [];
		this.arr.push((this.now == 0) ? this.len - 1 : this.now - 1); // 왼쪽놈(prev)
		this.arr.push(this.now); // 나(now)
		for(var i=0; i<this.cnt; i++) this.arr.push((this.now + i + 1) % this.len);	// 오른쪽놈(next)
		this.slides.empty();
		for(i in this.arr) this.slides.append($(this.slide[this.arr[i]]).clone());
	}
	return FxSlide;

	init();
	interval = setInterval(ani, delay, "-200%");
	function init() {
		arr[0] = (now == 0) ? len - 1 : now - 1;	// prev
		arr[1] = now;	// now
		arr[2] = (now == len - 1) ? arr[2] = 0 : arr[2] = now + 1;	// next
		$(".main-ban").empty();
		$(".main-ban").append($li[arr[0]]);
		$(".main-ban").append($li[arr[1]]);
		$(".main-ban").append($li[arr[2]]);
		$(".main-ban").css({"left": "-100%"});
	}	
	function ani(tar) {
		$(".main-ban").stop().animate({"left": tar}, speed, function(){
			(tar == 0) ? (now == 0) ? now = len - 1: now-- : (now == len - 1) ? now = 0 : now++;
			init();
		});
	}
	$(".pager-prev").click(function(e){
		ani(0);
	});
	$(".pager-next").click(function(e){
		ani("-200%");
	});
	$(".main-bans").mouseover(function(){
		clearInterval(interval);
	}).mouseleave(function(){
		clearInterval(interval);
		interval = setInterval(ani, delay, "-200%");
	});
})();