$(function(){
	
	$(".main_img .img li").eq(0).css("left","0");
	$(".main_img .img li").eq(0).siblings().css("left","100%");
	
	var n = 0;
	
	$(".btn li").click(function(){
		var i = $(this).index();
		
		$(".btn li").removeClass("on");
		$(this).addClass("on");
		
		
		if(n==i) return;
		
		$(".img li").eq(i).css("left","100%").animate({
			"left":"0"
		},400);
		$(".img li").eq(n).css("left","0").animate({
			"left":"-100%"
		},400);
		
		n=i;
		
	});
	
		
	$(window).resize(function(){
		var h = $(window).height();
		
		$(".main_img").height(h);
	});	
	$(window).trigger("resize");	
	
	
	
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		
		if(s>99){
			$("header").addClass("on");
		}else{
			$("header").removeClass("on");
		}
		
	});
	
	$(".m_menu_btn").click(function(){
			
		$(this).toggleClass("on");
		$(".m_header").toggleClass("on");
			
	});
	
	
	
	
	
});