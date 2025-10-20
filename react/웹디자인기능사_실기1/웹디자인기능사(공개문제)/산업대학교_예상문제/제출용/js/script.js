$(function(){
	$("nav").mouseenter(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideDown();
	});
	$("nav").mouseleave(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideUp();
	});
	
	var i = 0;
	
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".img_slide ul li").eq(i).css("left","100%").stop().animate({
			"left":"0"
		});
		$(".img_slide ul li").eq(i-1).css("left","0%").stop().animate({
			"left":"-100%"
		});
		
	},3000);
	
	$(".t1").click(function(){
		$(".pop").fadeIn();
	});
	$("button").click(function(){
		$(".pop").fadeOut();
	});
	
});