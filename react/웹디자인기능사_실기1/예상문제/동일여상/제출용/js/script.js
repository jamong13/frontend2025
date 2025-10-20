$(function(){
	
	$("#nav_cover>ul>li").mouseover(function(){
		$(this).find("ul").stop().slideDown();
	});
	$("#nav_cover>ul>li").mouseleave(function(){
		$(this).find("ul").stop().slideUp();
	});
	
	
	var visual = $("#main_img .img");
	var btn = $("#button > ul > li");
	var current = 0;
	var setIntervalid;
	
	btn.click(function(){
		var i = $(this).index();
		
		btn.removeClass("on");
		$(this).addClass("on");
		
			move(i)
		return false;
	});
	
	timer();
	function timer(){
		setIntervalid = setInterval(function(){
			var n = current + 1;
			if(n == visual.length){
				n = 0;
			}
			btn.eq(n).trigger("click");
		},3000);
		
	}
	$("#main_img").mouseover(function(){
		clearInterval(setIntervalid);
	});
	$("#main_img").mouseleave(function(){
		timer();
	});
	
	function move(i){
		if(current == i)return;
		
		var currentEl = visual.eq(current);
		var nextEl = visual.eq(i);
		
		currentEl.css("left","0").stop().animate({"left":"-100%"});
		nextEl.css("left","100%").stop().animate({"left":"0"});
		
		current = i;
	}
});










