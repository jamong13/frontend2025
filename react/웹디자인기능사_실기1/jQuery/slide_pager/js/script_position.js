$(function(){
	
	
$("#main_img .img li").eq(0).css("left","0");
$("#main_img .img li").eq(0).siblings().css("left","100%");
	
var n = 0;
$(".btn li").click(function(){
	var i = $(this).index();
	
	if(n==i) return;
		
	if(i>n){
		$(".img li").eq(i).css("left","100%").animate({
			"left":"0"
		},400);		
		$(".img li").eq(n).css("left","0").animate({
			"left":"-100%"
		},400);
	}else if(i<n){
		$(".img li").eq(i).css("left","-100%").animate({
			"left":"0"
		},400);		
		$(".img li").eq(n).css("left","0").animate({
			"left":"100%"
		},400);
	}
	n=i; 
	
});
	
	
	
	
	
	
	
	
});