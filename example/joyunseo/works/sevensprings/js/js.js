$(function(){


	var ww = $(window).width()/7;
	var all_width = ww*14;
	$(".f_img").width(all_width);
	$(".f_img img").width(ww);
	
	$(window).resize(function(){
		var ww = $(window).width()/7;
		var all_width = ww*14;
		$(".f_img").width(all_width);
		$(".f_img img").width(ww);
	});

	

	$(".brand").mouseover(function(){
		var i = $(this).index();
		
		$(".s2_bg").removeClass("on");
		$(".s2_bg").eq(i).addClass("on");
	});

	
	$(".f_img").mousemove(function(e){
		var x = e.pageX;
		
		$(".f_img").css("left",0-x);
		
	});
	
	
	$(".slide li").eq(0).css("left","0");
	$(".slide li").eq(0).siblings().css("left","100%");
	
	var i=0;
	
	setInterval(function(){
		i++;
		
		if(i==2){i=0;}
		
		$(".slide li").eq(i).css("left","100%").animate({
			"left":"0"
		},600);
		$(".slide li").eq(i-1).css("left","0").animate({
			"left":"-100%"
		},600);
		
	},4000);
	

	var nn = 0;
	$("#wrap section").mousewheel(function(event, d){
		//마우스를 올렸을 때
		if(d>0){
			var prev = $(this).prev("section");
			nn = prev.index();
			var t = $(this);
			var tnum = t.index();
			if(tnum==0) return;
			
			if(nn>=1){
				$("header").css({
					"background-color":"#fff",
					"border-bottom":"1px solid #f5f2ec"
				});
				$("header .gnb li").css("border-left","1px solid #f5f2ec");
				$("header .gnb li:last-child").css("border-right","1px solid #f5f2ec");
				$("header .gnb li a").css("color","#000");
				
				$(".full").css("background-color","#f5f2ec");
				$(".full_cover ul li a").css("color","#777");
			}else{
				$("header").css({
					"background-color":"transparent",
					"border-bottom":"1px solid rgba(0,0,0,0)"
				});
				$("header .gnb li").css("border-left","1px solid rgba(0,0,0,0)");
				$("header .gnb li:last-child").css("border-right","1px solid rgba(0,0,0,0)");
				$("header .gnb li a").css("color","#fff");
				
				$(".full").css("background-color","transparent");
				$(".full_cover ul li a").css("color","#fff");
			}
			
			
			prev.css("top","-100%").stop().animate({
				"top":"0"
			},400);
			t.css("top","0").stop().animate({
				"top":"100%"
			},400);
			
			$(".click li").removeClass("on");
			$(".click li").eq(tnum-1).addClass("on");
		
			console.log(tnum);
		}else if(d<0){
			var next = $(this).next("section");
			nn = next.index();
			var t = $(this);
			var tnum = t.index();
			var length = $("#wrap section").length;
			
			if(tnum==length-1) return;
			
			if(nn>=1){
				$("header").css({
					"background-color":"#fff",
					"border-bottom":"1px solid #f5f2ec"
				});
				$("header .gnb li").css("border-left","1px solid #f5f2ec");
				$("header .gnb li:last-child").css("border-right","1px solid #f5f2ec");
				$("header .gnb li a").css("color","#000");
				
				$(".full").css("background-color","#f5f2ec");
				$(".full_cover ul li a").css("color","#777");
			}else{
				$("header").css({
					"background-color":"transparent",
					"border-bottom":"1px solid rgba(0,0,0,0)"
				});
				$("header .gnb li").css("border-left","1px solid rgba(0,0,0,0)");
				$("header .gnb li:last-child").css("border-right","1px solid rgba(0,0,0,0)");
				$("header .gnb li a").css("color","#fff");
				
				$(".full").css("background-color","transparent");
				$(".full_cover ul li a").css("color","#fff");
			}
			
			next.css("top","100%").stop().animate({
				"top":"0"
			},400);
			t.css("top","0").stop().animate({
				"top":"-100%"
			},400);
			
			$(".click li").removeClass("on");
			$(".click li").eq(tnum+1).addClass("on");
			
			console.log(tnum);
		}
		
	});
	$(".click li").click(function(){
		var c = $(this).index();
		var s = $("section").eq(nn);
		var off = $("section").eq(c);
		
		if(c==nn) return;
		
		if(c>=1){
			$("header").css({
				"background-color":"#fff",
				"border-bottom":"1px solid #f5f2ec"
			});
			$("header .gnb li").css("border-left","1px solid #f5f2ec");
			$("header .gnb li:last-child").css("border-right","1px solid #f5f2ec");
			$("header .gnb li a").css("color","#000");
			
			$(".full").css("background-color","#f5f2ec");
			$(".full_cover ul li a").css("color","#777");
		}else{
			$("header").css({
				"background-color":"transparent",
				"border-bottom":"1px solid rgba(0,0,0,0)"
			});
			$("header .gnb li").css("border-left","1px solid rgba(0,0,0,0)");
			$("header .gnb li:last-child").css("border-right","1px solid rgba(0,0,0,0)");
			$("header .gnb li a").css("color","#fff");
			
			$(".full").css("background-color","transparent");
			$(".full_cover ul li a").css("color","#fff");
		}
			
		if(c>nn){
			s.css("top","0").animate({
				"top":"-100%"
			},400);
			off.css("top","100%").animate({
				"top":"0"
			},400);
			
			nn = c;
			
		}else if(c<nn){
			s.css("top","0").animate({
				"top":"100%"
			},400);
			off.css("top","-100%").animate({
				"top":"0"
			},400);
			nn = c;
		}
		$(".click li").removeClass("on");
		$(this).addClass("on");
	});
	
	
	
	
	
});