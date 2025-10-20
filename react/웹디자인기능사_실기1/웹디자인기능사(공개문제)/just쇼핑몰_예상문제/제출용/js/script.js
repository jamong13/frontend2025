$(function(){

	$(".gnb").mouseenter(function(){
		
		$(".gnb > li > ul, .full_bg").stop().slideDown();
	});
	$(".gnb").mouseleave(function(){
		
		$(".gnb > li > ul, .full_bg").stop().slideUp();
	});
	
	
	var i = 0;
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$(".imgs li").eq(i).css("top","100%").animate({
			"top":0			
		},600);
		$(".imgs li").eq(i-1).css("top",0).animate({
			"top":"-100%"			
		},600);
	},3000);
	
	$(".tab_title h2").click(function(){
		var e = $(this).index();
		$(".menu_cover .menu").css("display","none");
		$(".menu_cover .menu").eq(e).css("display","block");
		$(".tab_title h2").removeClass("on").eq(e).addClass("on");
	});
	
	
	$("table tr:first-child").click(function(){
		$(".pop_cover").fadeIn();		
	});
		
	$(".pop_cover button").click(function(){
		$(".pop_cover").fadeOut();		
	});
});