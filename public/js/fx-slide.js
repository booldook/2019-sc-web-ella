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
	prev: $(".pager-prev"), //
	next: $(".pager-next"), //
}
var slide1 = new FxSlide(obj);
*/
var FxSlide = (function(){
	function FxSlide(obj) {
		this.now = 0;
		this.slides = $(obj.slides);
		this.prev = obj.prev ? $(obj.prev) : $(".pager-prev");
		this.next = obj.next ? $(obj.next) : $(".pager-next");
		this.slide = this.slides.children();
		this.len = this.slide.length;
		this.cnt = obj.cnt ? Number(obj.cnt) : 1;
		this.speed = obj.speed ? Number(obj.speed) : 500;
		this.delay = obj.delay ? Number(obj.delay) : 3000;
		this.tar = 100 / this.cnt;
		this.width = this.tar * 2 + 100;
		this.dir = -1;
		this.interval = null;
		this.arr = [];
		this.startInit(this);
		this.init();
		this.interval = setInterval(this.ani, this.delay, this);
	}
	FxSlide.prototype.startInit = function(obj) {
		obj.prev.click(function(e){
			obj.dir = 0;
			obj.ani(obj);
		});
		obj.next.click(function(e){
			obj.dir = -1;
			obj.ani(obj);
		});
		obj.slides.mouseover(function(){
			clearInterval(obj.interval);
		}).mouseleave(function(){
			clearInterval(obj.interval);
			obj.interval = setInterval(obj.ani, obj.delay, obj);
		});
	}
	FxSlide.prototype.init = function() {
		console.log(this);
		this.arr = [];
		this.arr.push((this.now == 0) ? this.len - 1 : this.now - 1); // 왼쪽놈(prev)
		this.arr.push(this.now); // 나(now)
		for(var i=0; i<this.cnt; i++) this.arr.push((this.now + i + 1) % this.len);	// 오른쪽놈(next)
		this.slides.empty();
		for(i in this.arr) this.slides.append($(this.slide[this.arr[i]]).clone());
		this.slides.css({"width": this.width+"%", "left": (this.dir * this.tar) + "%"});
	}
	FxSlide.prototype.ani = function(obj) {
		console.log(obj);
		obj.slides.stop().animate({"left": (obj.dir * obj.tar * 2) + "%"}, obj.speed, function(){
			if(obj.dir == 0) (obj.now == 0) ? obj.now = obj.len - 1 : obj.now--;
			else (obj.now == obj.len - 1) ? obj.now = 0 : obj.now++;
			obj.dir = -1;
			obj.init();
		});
	}
	return FxSlide;
})();