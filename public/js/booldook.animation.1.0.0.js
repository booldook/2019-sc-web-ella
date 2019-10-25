var AniEasy = (function(){
	function AniEasy(elem) {
		this.elem = (elem == undefined) ? ".ani-easy" : elem;
		this.elem = document.querySelector(this.elem);
		this.interval;
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, cb) {
	this.css = css; // {"left": "-720px"} css.left / css["left"]
	this.cb = (typeof cb === 'function') ? cb : null;
	for(var key in this.css) {
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var pos = Number(this.cssValue.replace("px", "")); // -720px -> -720(문자) -> -720(숫자)
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", "")); // 초기값(숫자)
	clearInterval(this.interval);
	this.interval = setInterval(ani, 20, this);
	function ani(obj) {
		if(Math.ceil(Math.abs(tar)) == Math.abs(pos)) {
			clearInterval(obj.interval);
			obj.elem.style[obj.cssName] = pos+"px";
			if(obj.cb) obj.cb();
		}
		else {
			tar += (pos - tar) * 0.15;
			if(tar > Number(getComputedStyle(obj.elem)["width"].replace("px", ""))) {
				tar = 0;
			}
			obj.elem.style[obj.cssName] = tar+"px";
		}
	}
}

/*
obj = {
	elem: ".box", "#box", "div"
	target: 700,
	speed: 500,
}
*/


