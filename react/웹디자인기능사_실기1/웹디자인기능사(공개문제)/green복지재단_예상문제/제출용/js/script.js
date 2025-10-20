$(function(){
	$(".gnb>li").mouseover(function(){
		$(".gnb>li>ul").stop().slideDown();
		$(".fulldown").stop().slideDown();
	});
	$(".gnb>li, .fulldown").mouseout(function(){
		$(".gnb>li>ul").stop().slideUp();
		$(".fulldown").stop().slideUp();
	});
	
	var i = 0;

	setInterval(function(){
		i++;
		if(i==3){i=0;}
		$(".img_slide ul li").eq(i).css("left","100%").animate({"left":0},600);
		$(".img_slide ul li").eq(i-1).css("left",0).animate({"left":"-100%"},600);
	},3000);	

	$(".contents .notice table tr:nth-child(1)").click(function(){
		$("#pop").stop().show();
	});
	$("#pop .pop_up button").click(function(){
		$("#pop").stop().hide();
	});

});