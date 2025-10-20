$(function(){
	
	
$("#main_img .img li").eq(0).css("left","0");
$("#main_img .img li").eq(0).siblings().css("left","100%");

var i = 0;
setInterval(function(){
	i++;
	if(i==5){
		i=0;
	}
	$(".img li").eq(i).css("left","100%").animate({
		"left":"0"
	},400);
	$(".img li").eq(i-1).css("left","0%").animate({
		"left":"-100%"
	},400);
},3000);

console.log(i);
	
	
});




