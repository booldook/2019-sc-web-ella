var AniEasy = (function(){
	function AniEasy(obj) {
		this.elem = obj.elem == undefined ? ".ani-easy" : obj.elem;
		this.elem = document.querySelector(this.elem);
		this.interval;
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, speed, cb) {
	this.css = css;
	this.speed = speed;
	this.cb = (typeof cb === 'undefined') ? false : (typeof cb === 'function') ? cb : false;
	for(var key in this.css) {
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var pos = Number(this.cssValue.replace("px", ""));
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", ""));
	// console.log(pos, tar);
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

