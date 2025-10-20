$(function(){

	$("header nav dl dt").click(function(){
		var d = $(this).next("dd").css("display");
		
		if(d=="none"){
			$("header nav dl dd").stop().slideUp();
			$(this).next("dd").stop().slideDown();
		}else{
			$(this).next("dd").stop().slideUp();
		}
	});
	
	var n = 0;
	$("#img_slide .btn li").click(function(){
		var i = $(this).index();
		
		$("#img_slide .btn li").removeClass("on");
		$(this).addClass("on");
		
		if(n==i) return;
								//2 3 5
		$("#img_slide .img li").eq(i).css("left","100%").animate({
			"left":"0"
		},400);					//0	2 3
		$("#img_slide .img li").eq(n).css("left","0").animate({
			"left":"-100%"
		},400);
		n=i; //n=0->2->3->5
	});
	
	$(".notice table tr:nth-child(1)").click(function(){
		$("#pop").stop().fadeIn();
	});
	$(".pop_cover button").click(function(){
		$("#pop").stop().fadeOut();	
	});
	
	
	
	
	
	
	
});