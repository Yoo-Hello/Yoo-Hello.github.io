$(function(){
	$("#fullpage").fullpage({
		verticalCentered:true,
		anchors:["page1","page2","page3","page4","page5"],
		onLeave:function(index,nextindex,direction){
			NavStyle(index-1,nextindex-1);
			if(index !== 1 && nextindex !== 1){
				$('.MyLogo').animate({
					'opacity':'0'
				},200)
			}
			if(nextindex !== 1){
				$('.MyLogo').animate({
					'width':'60px',
					'height':'90px',
					'top':'6%',
					'left':'10%',
					'marginTop':'0',
					'marginLeft':'0',
					'borderWidth':'3px'
				},600).find('p').animate({
					'width':'12px',
					'fontSize':'12px',
					'padding':'5px'
				},600);
			}else if(nextindex == 1){
				$('.MyLogo').animate({
					'width':'180px',
					'height':'270px',
					'top':'50%',
					'left':'50%',
					'marginTop':'-186px',
					'marginLeft':'-96px',
					'borderWidth':'6px'
				},600).find('p').animate({
					'width':'30px',
					'fontSize':'30px',
					'padding':'15px'
				},600);
			}
		},
		afterLoad:function(link,index){
			if(index !== 1){
				$('.content').animate({
					'opacity':'0'
				},700)
				$('.MyLogo').animate({
					'opacity':'1'
				},300)
			}else if(index == 1){
				$('.content').animate({
					'opacity':'1'
				},700)
			}
		}
	});

	//导航样式
	function NavStyle(index,nextindex){
		var i=$('.nav').eq(index);
		var n=$('.nav').eq(nextindex);
		i.children("a").children("i").css({"color":"#ccc"})
		n.children("a").children("i").css({"color":"#333"});
	}
	/*媒体ICON样式*/
	$.fn.social = function(){
		for(var i=0;i<this.length;i++){
			$(this[i]).on('mousemove',function(){
				$(this).find('i').css({
					'color':'#333'
				});
			});
			$(this[i]).on('mouseout',function(){
				$(this).find('i').css({
					'color':'#999'
				});
			})
		}
		$('.weixin').on('mousemove',function(){
			$('.imgbox').css({
				'display':'block'
			})
		});
		$('.weixin').on('mouseout',function(){
			$('.imgbox').css({
				'display':'none'
			})
		})
	}
	
	/*上下居中*/
	$.fn.center = function(){
		for(var i=0;i<this.length;i++){
			var Mtop = "-"+$(this[i]).height()/2+"px";
			$(this[i]).css({'marginTop': Mtop});
		}
	}
	// page4翻页
	$.fn.switchPage = function(){
		var obj = this;
		var thisindex = 0;
		var switchPageAnimate = function(direction,obj){
			var animations = function(nextId){
				$(obj[thisindex]).find('li').first().animate({
					'left':'-50px'
				}).next().animate({
					'right':'-50px'
				}).parents('.works').animate({
					'opacity':'0'
				},function(){
					$(this).css({
						'display':'none'
					}).find('li').first().css({
						'left':'0'
					}).next().css({
						'right':'0'
					})
					$(obj[nextId]).css({
						'display':'block'
					}).animate({
						'opacity':'1'
					});
					$('.works ul li').center();
				})
			}
			if(direction == 'left' && thisindex > 0){
				animations(thisindex-1);
				thisindex--;
			}
			if(direction == 'right' && thisindex < obj.length-1){
				animations(thisindex+1);
				thisindex++;
			}
		}
		$('#Lbtn').on('click',function(){
			switchPageAnimate('left',obj);
		});
		$('#Rbtn').on('click',function(){
			switchPageAnimate('right',obj);
		});
	}
	// 页面功能
	function pageFun(){
		$('.works').switchPage();
		$('.works ul li').center();
		$('.social ul li a').social();
	}
	pageFun();
})