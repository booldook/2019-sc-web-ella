var AniEasy = (function(){
	function AniEasy(obj) {
		this.elem = obj.elem == undefined ? ".ani-easy" : obj.elem;
		this.elem = document.querySelector(this.elem);
	}
	return AniEasy;
})();

AniEasy.prototype.animate = function(css, speed, cb) {
	this.css = css;
	this.speed = speed;
	for(var key in this.css) {
		this.cssName = key;
		this.cssValue = this.css[key];
	}
	var pos = Number(this.cssValue.replace("px", ""));
	var tar = Number(getComputedStyle(this.elem)[this.cssName].replace("px", ""));
	// console.log(pos, tar);
	var interval = setInterval(ani, 20, this);
	function ani(obj) {
		if(Math.ceil(tar) == pos) {
			clearInterval(interval);
			obj.elem.style[obj.cssName] = pos+"px";
			if(!cb) cb();
		}
		else {
			tar += (pos - tar) * 0.15;
			console.log(tar);
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

