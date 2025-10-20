$(function(){
	$("nav>ul>li").mouseenter(function(){
		$(this).children("ul").css("display","block")
	});
	$("nav>ul>li").mouseleave(function(){
		$(this).children("ul").css("display","none")
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