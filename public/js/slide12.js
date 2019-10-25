// 전역변수
var now = 0;
var interval;
var speed = 500;
var delay = 2000;
var cnt = 0;	// Ajax으로 가져온 슬라이드 갯수
var html = ["", ""];
var ajax = new XMLHttpRequest();
// var aniEasy = new AniEasy(".banners");

// 시작
ajax.onreadystatechange = slideInit;	// CallBack Init
ajax.open("GET", "../json/slide.json");
ajax.send();

function slideInit() {
	if(this.readyState == 4 && this.status == 200) {
		/* 
		console.log(this.responseText);	// String형식의 json 원본
		console.log(JSON.parse(this.responseText));	// String -> JS Object
		console.log(JSON.stringify(JSON.parse(this.responseText)));	// JS Object -> String 
		*/
		var res = JSON.parse(this.responseText);
		cnt = res.slides.length;
		for(var i in res.slides) {
			html[0] += '<li class="banner">';
			html[0] += '<img src="'+res.slides[i].src+'" alt="'+res.slides[i].desc+'" class="banner-img">';
			html[0] += '<h2 class="banner-cont">'+res.slides[i].desc+'</h2>';
			html[0] += '</li>';
			html[1] += '<div class="pager" data-idx="'+i+'">●</div>';
		}
		document.querySelector(".banners").innerHTML = html[0];
		document.querySelector(".pagers").innerHTML = html[1];
		document.querySelector(".banners").appendChild(document.querySelectorAll(".banner")[0].cloneNode(true));
		startInit();
	}
}

// 이벤트
function startInit() {
	document.querySelector(".bt-prev").style.display = "none";
	document.querySelector(".bt-prev").addEventListener("click", function(){
		if(now > 0) now--;
		init();
	})
	document.querySelector(".bt-next").addEventListener("click", function(){
		if(now < 4) now++;
		init();
	});
	document.querySelectorAll(".pager").forEach(function(item, key){
		item.addEventListener("click", function(e){
			now = this.dataset["idx"];
			init();
		});
	});
	
	
	document.querySelector(".banners-wrap").addEventListener("mouseover", function(){
		clearInterval(interval);
	});
	document.querySelector(".banners-wrap").addEventListener("mouseleave", function(){
		clearInterval(interval);
		interval = setInterval(intervalCb, 2000);
	});
	// Interval CallBack
	function intervalCb() {
		now++;
		init();
	}
	pagerInit();
	interval = setInterval(intervalCb, 4000);
}

//동작
// 이벤트 발생할 때 실행할 함수
function init() {
	ani();
	btInit();
	pagerInit();
}
// 애니메이션
function ani() {
	/* aniEasy.animate({"left": (-720*now)+"px"}, function(){
		if(now == 5) {
			now = 0;
			document.querySelector(".banners").style.left = 0;
			pagerInit();
			btInit();
		}
	}); */
	anime({
		targets: '.banners',
		translateX: -720*now,
		duration: speed,
		/* easing: 'cubicBezier(.5, .05, .1, .3)', */
		easing: 'easeInOutExpo',
		update: function(){
			if(now == 5) {
				now = 0;
				document.querySelector(".banners").style.left = 0;
				pagerInit();
				btInit();
			}
		}
	});
}
// 버튼 정렬
function btInit() {
	if(now == 0) {
		document.querySelector(".bt-prev").style.display = "none";
		document.querySelector(".bt-next").style.display = "block";
	}
	else if(now == 4) {
		document.querySelector(".bt-prev").style.display = "block";
		document.querySelector(".bt-next").style.display = "none";
	}
	else {
		document.querySelector(".bt-prev").style.display = "block";
		document.querySelector(".bt-next").style.display = "block";
	}
}
// 페이저 정렬
function pagerInit() {
	document.querySelectorAll(".pager").forEach(function(item, key) {
		if(key == now) item.classList.add("active");
		else item.classList.remove("active");
	});
}


// getComputedStyle(dom);
var bannersCss = getComputedStyle(document.querySelector(".banners"));