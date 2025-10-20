$(function(){
	$("header > ul > li > ul").hide();
	
	$("header > ul > li").mouseover(function(){
		$(this).find("ul").stop().slideDown();
	});
	$("header > ul > li").mouseleave(function(){
		$(this).find("ul").stop().slideUp();
	});
	
	
	var i = 0;
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		$("#main_img input").eq(i).trigger("click");
	},3000);
	
	
	$("#pop").hide();
	$(".categori img").click(function(){
		$("#pop").fadeIn();
	});
	$(".pop_cover button").click(function(){
		$("#pop").fadeOut();
	});
	
	
	$("header > ul > li").mouseover(function(){
		var i = $(this).index();
		var w = $("header > ul > li").width();
		
		$("header > ul > li.box").stop().animate({
			"left":i*w
		},600);
		//console.log(i,w);
	});
});








