$(function(){
	$(".gnb>li>a").mouseenter(function(){
		$(".gnb>li>ul").stop().slideUp();
		$(this).next("ul").stop().slideDown();
	});
	$(".gnb>li").mouseleave(function(){
		$(".gnb>li>ul").stop().slideUp();
	});
	
	var i = 0;
	
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".img_slide>ul>li").eq(i).stop().fadeIn();
		$(".img_slide>ul>li").eq(i-1).stop().fadeOut();
		
		
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