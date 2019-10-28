$(window).resize(function(){
	$(".videos").remove();
	$("body").append('<div class="videos"></div>');
	$(".videos").vegas({
		slides: [{video: {src: ['../video/sea-movie.mp4'], loop: true, mute: true}}]
	});
}).trigger("resize");

$.vegas.isVideoCompatible = function () {
	var devices = /(Android|webOS|Phone|iPad|iPod|BlackBerry|Windows Phone)/i;
	return !devices.test(navigator.userAgent);
}