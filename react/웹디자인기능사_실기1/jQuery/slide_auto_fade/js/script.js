$(function(){

$(".img li").eq(0).show();
$(".img li").eq(0).siblings().hide();


var i = 0;
setInterval(function(){
	i++;
	if(i==5){
		i=0;
	}
	$(".img li").eq(i).fadeIn(1000);
	$(".img li").eq(i-1).fadeOut(1000);
},3000);
	
	
});




