/*
var FxSlide = (function(){
	function FxSlide(obj) {

	}
	return FxSlide;
})();

// 사용자가 쓰는 법
var obj = {
	slides: $(".slides"), // 필수
	speed: 500,	// 애니메이션 속도()
	delay: 3000,	// 딜레이
	autoplay: true,	// 자동움직임
	direction: "toLeft",	// "toLeft", "toRight"
	cnt: 1,	// 한번에 보이는 이미지 수
	prev: $(".pager-prev"), 
	next: $(".pager-next"),
	pager: $(".pagers") // 넣거나 말거나 
}
var slide1 = new FxSlide(obj);
*/
var FxSlide = (function(){
	function FxSlide(obj) {
		this.now = 0;
		this.isAni = false;
		this.slides = $(obj.slides);
		this.slide = this.slides.children();
		this.prev = obj.prev ? $(obj.prev) : $(".pager-prev");
		this.next = obj.next ? $(obj.next) : $(".pager-next");
		this.len = this.slide.length;
		this.cnt = obj.cnt ? Number(obj.cnt) : 1;
		this.speed = obj.speed ? Number(obj.speed) : 500;
		this.delay = obj.delay ? Number(obj.delay) : 3000;
		this.tar = 100 / this.cnt;
		this.width = this.tar * 2 + 100;
		this.pagers = (obj.pager && this.cnt == 1) ? $(obj.pager) : false;
		if(this.pagers) this.pager = this.pagers.children();
		this.direction = obj.direction == "toRight" ? 0 : -1;
		this.dir = this.direction;
		this.autoplay = obj.autoplay == false ? false : true;
		this.interval = null;
		this.arr = [];
		this.startInit(this);	// 객체생성시 한번만 실행
		this.init();	// 애니메이션이 종료되면 실행
		if(this.autoplay) this.interval = setInterval(this.ani, this.delay, this);
	}
	FxSlide.prototype.startInit = function(obj) {
		obj.prev.click(function(e){
			if(obj.isAni) return false;
			obj.dir = 0;
			obj.ani(obj);
		});
		obj.next.click(function(e){
			if(obj.isAni) return false;
			obj.dir = -1;
			obj.ani(obj);
		});
		if(obj.autoplay) {
			obj.slides.parent().mouseover(function(){
				clearInterval(obj.interval);
			}).mouseleave(function(){
				clearInterval(obj.interval);
				obj.interval = setInterval(obj.ani, obj.delay, obj);
			});
		}
		if(obj.pagers) {
			obj.pager.click(function(){
				if(obj.isAni) return false;
				obj.now = $(this).index();
				obj.pager.removeClass("active");
				$(this).addClass("active");
				// 기존에 셋팅되어 있는 그림을 바꾸는 곳
				if(obj.dir == 0) obj.slides.children().eq(0).html($(obj.slide[obj.now]).html());
				else obj.slides.children().eq(2).html($(obj.slide[obj.now]).html());
				obj.ani(obj, true);
			});
		}
	}
	FxSlide.prototype.init = function() {
		this.arr = [];
		this.arr.push((this.now == 0) ? this.len - 1 : this.now - 1); // 왼쪽놈(prev)
		this.arr.push(this.now); // 나(now)
		for(var i=0; i<this.cnt; i++) this.arr.push((this.now + i + 1) % this.len);	// 오른쪽놈(next)
		this.slides.empty();
		for(i in this.arr) this.slides.append($(this.slide[this.arr[i]]).clone());
		this.slides.css({"width": this.width+"%", "left": -this.tar + "%"});
	}
	FxSlide.prototype.ani = function(obj, isClick) {
		obj.isAni = true;
		if(!isClick) {
			if(obj.dir == 0) (obj.now == 0) ? obj.now = obj.len - 1 : obj.now--;
			else (obj.now == obj.len - 1) ? obj.now = 0 : obj.now++;
			if(obj.pagers) {
				$(obj.pager).removeClass("active");
				$(obj.pager).eq(obj.now).addClass("active");
			}
		}
		obj.slides.stop().animate({"left": (obj.dir * obj.tar * 2) + "%"}, obj.speed, function(){
			obj.isAni = false;
			obj.dir = obj.direction;
			obj.init();
		});
	}
	return FxSlide;
})();