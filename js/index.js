$(function(){
	var n=0;
	var nexts=function(){
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
	var move=setInterval(nexts,5000);
	var previous=function(){
		var w=$('.banner').width();
		console.log($('.banner:last'))
		$('.banner:last')
		.css('left','-100%')
		.parent('.banner-box')
		.prepend($('.banner:last'))
		.find('div:first')
		.animate({left:0});
		$('.banner:first').next().animate({left:+w})
	}
	$('.banner').mouseover(function(){
		clearInterval(move);
	}).mouseout(function(){
		move=setInterval(nexts,5000);
	})

	$('.Lanniu').click(function(){
		previous();
	})
	$('.Ranniu').click(function(){
		nexts();
	})

	var iconLB=function(){
		var w=$('.icondesign').width();
		$('.icondesign:first').animate({left:-w},20000,'linear',function(){
			$(this).css('left','50%')
			.parent('.iconbox')
			.append($(this));
		})
		$('.icondesign:first').next().animate({left:0},20000,'linear');
	}
	iconLB();
	setInterval(iconLB,20050)
})