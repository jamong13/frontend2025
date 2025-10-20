$(function(){
	
	$(".img li").eq(0).css("left","0");
	$(".img li").eq(0).siblings().css("left","100%");
	
	var i = 0;
	
	$(".next").click(function(){
		i++;
		if(i==5){
			i=0;
		}
		
		$(".img li").eq(i).css("left","100%").animate({
			"left":"0"
		},400);
		$(".img li").eq(i-1).css("left","0").animate({
			"left":"-100%"
		},400);
		console.log(i);
	});
	
	$(".prev").click(function(){
		i--;
		if(i==-5){
			i=0;
			
		}
		$(".img li").eq(i).css("left","-100%").animate({
			"left":"0"
		},400);
		$(".img li").eq(i+1).css("left","0").animate({
			"left":"100%"
		},400);
		console.log(i);
	});
	
	
	
	
	
	
	
});


