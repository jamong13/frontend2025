$(function(){
	$("nav").mouseenter(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideDown();
	});
	$("nav").mouseleave(function(){
		$("nav>ul>li>ul, .full_bg").stop().slideUp();
	});
	
	var k = 0;
	$(".pager li").click(function(){
		var i = $(this).index();
		
		if(i==k)return;
		if(i>k){
			$(".img_slide ul li").eq(i).css("top","100%").stop().animate({
				"top":"0"
			});
			$(".img_slide ul li").eq(k).css("top","0%").stop().animate({
				"top":"-100%"
			});
		}else if(i<k){
			$(".img_slide ul li").eq(i).css("top","-100%").stop().animate({
				"top":"0"
			});
			$(".img_slide ul li").eq(k).css("top","0%").stop().animate({
				"top":"100%"
			});
		}
		
		k=i
		$(".pager li").removeClass("on").eq(i).addClass("on");
		
	});
	
	$(".t1").click(function(){
			$(".pop").stop().fadeIn();
		});
		$("button").click(function(){
			$(".pop").stop().fadeOut();
		});
});