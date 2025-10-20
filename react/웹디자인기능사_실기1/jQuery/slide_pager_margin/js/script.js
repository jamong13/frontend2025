$(function(){
	
$(".btn li").click(function(){
	var i = $(this).index();
	var w = $(".img li").width();
	var r = i*w;
	
	$(".img").stop().animate({
		"margin-left":"-"+r+"px"
	},400);
	
});

var k = 0;
setInterval(function(){
	k++;
	if(k==5){
		k=0;
	}
	$(".btn li").eq(k).trigger("click");
},2000);

	
	
	
	
	
	
	
	
});
