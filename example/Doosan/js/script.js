$(function(){

	//fulldown
 
	$(".nav li, .full_menu").mouseover(function(){
		$(".full_menu").stop().slideDown(600);
	});
	
	$(".nav li, .full_menu").mouseleave(function(){
		$(".full_menu").stop().slideUp(600);
	});

	$(".full_cover > ul > li").mouseover(function(){
		var i = $(this).index();
		$(".nav li").eq(i).find(".line").css("width","100%");
	});
	
	$(".full_cover > ul > li").mouseleave(function(){
		var i = $(this).index();
		
		$(".nav li").eq(i).find(".line").css("width","0");
	});
	
	$(".nav li").mouseover(function(){
		$(this).find(".line").css("width","100%");
	});
	
	$(".nav li").mouseleave(function(){
		$(this).find(".line").css("width","0");
	});

	// main_slide
	/*
	var i = 0;
		
		$(".slide_cover ul li").eq(0).css("left","0");
		$(".slide_cover ul li").eq(0).siblings().css("left","-200%");
		
			/*
			setTimeout(function(){
				$(".slide_cover ul li").eq(i).delay(2000).css("left","-100%").animate({
					"left":"0"
				},1000);
				
				$(".slide_cover ul li").eq(i-1).css("left","0").animate({
					"left":"100%"
				},1000);
			},3000);*/
	/*	
	var i_timer = setInterval(timer, 5000);
	var n_timer = img_slide;
	
	function timer(){
			
			i++;
			if(i==3){
				i=0;
			}
			
			$(".slide_btn ul li").eq(i-1).find(".color").css("width","0").stop().animate({
				"width":"100%"
			},5000, function(){
				$(".slide_btn ul li").eq(i-1).find(".color").css("width","0");
			});
			
			n_timer = setInterval(img_slide, 5000);
			clearInterval(i_timer);
			
	} //function timer
	
	var n = 0;
	
	var result_n = 0;
	
	function img_slide(){
			
			n++;
			
			if(n==3){
				n=0;
			}
			
			$(".slide_cover ul li").eq(n).css("left","-200%").stop().animate({
				"left":"0"
			},3000);
			
			$(".slide_cover ul li").eq(n-1).css("left","0").stop().animate({
				"left":"100%"
			},1000);
			
			result_n = n;
		
		i_timer = setInterval(timer, 5000);
		clearInterval(n_timer);
	}
	
	
	var ix;
	//var click_timer = click_slide;
	
	$(".slide_btn ul li").click(function(){
		clearInterval(i_timer, n_timer);
		
		ix = $(this).index();
		
		$(".slide_cover ul li").eq(ix).css("left","-200%").stop().animate({
			"left":"0"
		},3000);
		
		$(".slide_cover ul li").eq(result_n).css("left","0").stop().animate({
			"left":"100%"
		},100);
		
		result_n = ix;
		//click_timer = setInterval(click_slide, 5000);
	});

	
		
	function click_slide(){	

			ix++;
			
			if(ix==3){
				ix=0;
			}
			
			$(".slide_cover ul li").eq(ix).css("left","-200%").stop().animate({
				"left":"0"
			},3000);
			
			$(".slide_cover ul li").eq(ix-1).css("left","0").stop().animate({
				"left":"100%"
			},1000);
		
	}
	
	$(".slide_btn ul li").click(function(){
		
		var ix = $(this).index;
		
		clearInterval(i_timer, n_timer);
				
		$(".slide_cover ul li").eq(ix).delay(2000).css("left","-100%").animate({
			"left":"0"
		},1000);
		
		$(".slide_cover ul li").eq(q).css("left","0").animate({
			"left":"100%"
		},1000);
		
		i_timer = setInterval(timer, 5000);
		
	});
	
	*/
	
	
	
	$(window).resize(function(){
		var w_width = $(window).width();
		var img_height = $(".slide_cover ul li img.pc").height();
		var img_height_mo = $(".slide_cover ul li img.mo").height();
		
		if(w_width > 1330){
			$("#main_slide .slide_cover").height(img_height);
		}else{
			$("#main_slide .slide_cover").height(img_height_mo);
		}
	});
	
	$(window).trigger('resize');
	
	
	// Main_slide
	
	var i = 0;
	var n = null;
	var k = null;
	var repeat;
	
	timer();
	
	function timer(){
		
		repeat = setInterval(function(){
			
			i++;
			k = i-1;
			if(i==3){i=0;}
			
			slide();
		},5000);
	}
	
	/*
	function white_box(){
		$(".slide_cover ul li .white_box").css("left","-100%").delay(1500).animate({
			"left":"0"
		},1000, function(){
			$(".slide_cover ul li .white_box").animate({
				"left":"100%"
			},1000);
		});
	}*/
	
	function slide(){
		$(".slide_btn ul li").off("click");
		$(".cursor_left, .cursor_right").off("click");
		$(".reset").off("click",reset);
		clearInterval(repeat);
		
		$(".slide_cover ul li").find(".white_box").css("left","-100%").animate({
			"left":"0"
		},1000, function(){
			
			$(".slide_cover ul li").find(".white_box").stop().animate({
				"left":"100%"
			},1000);
			
			$(".slide_cover ul li").eq(i).addClass("on");
			$(".slide_cover ul li").eq(k).removeClass("on");
			
			$(".color, .img_logo, .img_text, .box").removeClass("on");
			$(".slide_btn ul li").eq(i).find(".color").addClass("on");
			$(".slide_cover ul li").eq(i).find(".img_logo").addClass("on");
			$(".slide_cover ul li").eq(i).find(".img_text").addClass("on");
			$(".slide_cover ul li").eq(i).find(".box").addClass("on");
			$(".slide_cover ul li a img").removeClass("on");
			$(".slide_cover ul li").eq(i).find("a img").addClass("on");
		});
		
		/*
		$(".slide_cover ul li").eq(i).delay(2000).animate({
			"z-index":"5"
		},1000, function(){
			$(".color, .img_logo, .img_text, .box").removeClass("on");
			$(".slide_btn ul li").eq(i).find(".color").addClass("on");
			$(".slide_cover ul li").eq(i).find(".img_logo").addClass("on");
			$(".slide_cover ul li").eq(i).find(".img_text").addClass("on");
			$(".slide_cover ul li").eq(i).find(".box").addClass("on");
			
			$(".slide_cover ul li a img").removeClass("on");
			$(this).find("img").addClass("on");
		});*/
		
		$(".slide_cover ul li").eq(k).animate({
			"left":"0"
		},2000, function(){
			$(".slide_cover ul li").eq(k).removeClass("on");
			setTimeout(function(){
				$(".slide_btn ul li").on("click",click_slide);
				$(".cursor_left").on("click",left_click);
				$(".cursor_right").on("click",right_click);
				
				var pause_css = $(".pause_btn").css("display");
				
				if(pause_css == "none"){
					clearInterval(repeat);
					$(".color").removeClass("on");
				}else{
					timer();
					$(".slide_btn ul li").eq(i).find(".color").addClass("on");
				}
			},1000);
		});
		
		n=i;
	}
	
	function click_slide(){
		i = $(this).index();
		if(i==n) return;
		
		k=n;
		
		//k = 1;
		slide();
		$(".color").removeClass("on");
	}
	
	function left_click(){
		
		i--;
		if(i==-1){i=2;}
		if(i==n) return;
		
		k=n;
		
		slide();
		$(".color").removeClass("on");
	}
	
	function right_click(){
		i++;
		if(i==3){i=0;}
		if(i==n) return;
		
		k=n;
		
		slide();
		$(".color").removeClass("on");
	}
	
	function reset(){
		
		var pause_css = $(".pause_btn").css("display");
		var start_css = $(".start_btn").css("display");
		
		if(pause_css=="none"){
			clearInterval(repeat);
			$(".color").removeClass("on");
		}else{
			timer();
			$(".slide_btn ul li").eq(i).find(".color").addClass("on");
		}
	}
	
	$(".reset").click(function(){
		reset();
	});
	
	$(".reset .pause_btn").click(function(){
		$(".pause_btn").css("display","none");
		$(".start_btn").css("display","block");
	});


	$(".reset .start_btn").click(function(){
		$(".start_btn").css("display","none");
		$(".pause_btn").css("display","block");
	});
	
	
	$(".slide_btn ul li").on("click",click_slide);
	$(".cursor_left").on("click",left_click);
	$(".cursor_right").on("click",right_click);


	// main_slide_cursor
	/*
	$(".main_cursor .cursor_left").mouseover(function(){
		
		$(".cursor_left").css("cursor","url('../images/main_cursor_l.svg'), auto");
		
		
	});*/
	
	
	$(".main_cursor").mousemove(function(e){
		var x = e.clientX;
		var y = e.clientY-80;
		
		$(".cursor").css({
			"left":x,
			"top":y
		});
	});























}); //end