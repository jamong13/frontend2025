$(function(){
	
var w = $(".img li").width();
var n = 0;
$(".btn li").click(function(){
	var i = $(this).index();
	
	$(".img").stop().animate({
		"margin-left":-(i*w)
	},400);		

});
	
	
	
});