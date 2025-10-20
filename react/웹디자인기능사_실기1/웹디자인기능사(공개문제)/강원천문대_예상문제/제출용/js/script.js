$(function(){
	$(".gnb>ul>li").mouseover(function(){
		$(this).children("ul").stop().fadeIn();
	});
	$(".gnb>ul>li").mouseout(function(){
		$(this).children("ul").stop().fadeOut();
	});

	var i = 0
	setInterval(function(){
		i++;
		if(i==3){i=0;}
		$(".image li").eq(i).fadeIn(1000);
		$(".image li").eq(i-1).fadeOut(1000);
	},3000);
	
	$(".tab_menu .tab_title ul li").click(function(){
		var t = $(this).index();
		
		$(".tab_menu .tab .t_tab").css("display","none").eq(t).css("display","block");
		$(".tab_menu .tab_title ul li").removeClass("on").eq(t).addClass("on");
	});
	
	$(".t_table table tr").eq(0).click(function(){
		$("#pop").stop().show();		
	});
	$("#pop .pop_up button").click(function(){
		$("#pop").stop().hide();
	});
});