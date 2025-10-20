$(function(){
	$("nav").mouseenter(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideDown();
	});
	$("nav").mouseleave(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideUp();
	});
	
	var i = 0;
	$(".next").click(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".img_slide ul li").eq(i).css("left","100%").stop().animate({
			"left":0
		});
		$(".img_slide ul li").eq(i-1).css("left","0%").stop().animate({
			"left":"-100%"
		});
	});
	$(".prev").click(function(){
		i--;
		$(".img_slide ul li").eq(i).css("left","-100%").stop().animate({
			"left":0
		});
		$(".img_slide ul li").eq(i+1).css("left","0%").stop().animate({
			"left":"100%"
		});
		
		if(i==-1){
			i=2;
		}
	});
	
	$(".contents .menu li").click(function(){
		var i = $(this).index();
		
		$(".btn_cover .btn").hide().eq(i).show();
		$(".menu li").removeClass("on").eq(i).addClass("on");
	});
	
	$(".t1").click(function(){
		$(".pop").stop().fadeIn(400);
	});
	$("button").click(function(){
		$(".pop").stop().fadeOut(400);
	});
	
});