$(function(){
	$(".gnb>li>a").mouseenter(function(){
		$(".gnb>li>ul").css("display","none");
		$(this).next("ul").css("display","block");
	});
	$(".gnb>li").mouseleave(function(){
		$(".gnb>li>ul").css("display","none");
	});
	
	var i = 0;
	
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".img_slide>ul>li").eq(i).css("left","100%").stop().animate({
			"left":0
		});
		$(".img_slide>ul>li").eq(i-1).css("left","0%").stop().animate({
			"left":"-100%"
		});
		
		
		
	},3000);
	
	$(".menu ul li").click(function(){
		var i = $(this).index();
	
		$(".btn").css("display","none").eq(i).css("display","block");
		$(".menu ul li").removeClass("on").eq(i).addClass("on");
	});
	
	$(".t1").click(function(){
		$(".pop").stop().fadeIn();
	});
	$("button").click(function(){
		$(".pop").stop().fadeOut();
	});
	
});