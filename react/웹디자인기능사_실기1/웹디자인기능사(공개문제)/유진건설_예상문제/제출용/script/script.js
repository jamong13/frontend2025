$(function(){
	$(".menu > ul > li").mouseover(function(){
		var i = $(this).index();
		
		$(this).css("background-color","#5b9bd2");
		$(".full_cover ul").eq(i).css("background-color","#5b9bd2");
		
	});
	$(".menu > ul > li").mouseout(function(){
		var i = $(this).index();
		
		$(this).css("background-color","transparent");
		$(".full_cover ul").eq(i).css("background-color","transparent");
		
	});
	$(".full_cover ul").mouseover(function(){
		var i = $(this).index();
		
		$(this).css("background-color","#5b9bd2");
		$(".menu > ul > li").eq(i).css("background-color","#5b9bd2");
		
	});
	$(".full_cover ul").mouseout(function(){
		var i = $(this).index();
		
		$(this).css("background-color","transparent");
		$(".menu > ul > li").eq(i).css("background-color","transparent");
		
	});
	
	
	
	
	$("#img_slide ul li").eq(0).show();
	$("#img_slide ul li").eq(0).siblings().hide();
	
	var i = 0;
	setInterval(function(){
		i++;
		if(i==3){
			i=0;
		}
		
		$("#img_slide ul li").eq(i).fadeIn();
		$("#img_slide ul li").eq(i-1).fadeOut();
	},3000);
});