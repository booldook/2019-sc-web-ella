var AniEasy = (function(){
	function AniEasy(obj) {
		this.elem = obj.elem == undefined ? ".ani-easy" : obj.elem;
		this.elem = document.querySelector(this.elem);
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, speed) {
	this.css = css;
	this.speed = speed;
	for(var key in this.css) {
		console.log(key);
		console.log(this.css[key]);
		this.interval;
		interval = setInterval(ani, 500);
	}
	function ani() {
		//console.log(AniEasy.css["left"]);
	}
}

/*
obj = {
	elem: ".box", "#box", "div"
	target: 700,
	speed: 500,
}
*/

