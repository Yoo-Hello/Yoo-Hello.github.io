$(function(){
	var times=function(){
		var w=$('.banner').width();
		$('.banner:first')
		.animate({left:-w},function(){
			$(this)
			.css('left','100%')
			.parent('.banner-box')
			.append($(this));
		});
		$('.banner:first').next().animate({left:0})
	}
	var move=setInterval(times,5000);
})