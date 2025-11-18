$(function(){
	
	var win_h;
	var win_w;
	
	$(window).resize(function(){
		win_w = $(window).width();
		win_h = $(window).height();
		
		if(win_w > 1240){
			// #main 높이값조절
			$("#main").height(win_h);
		}else{
			$("#main").css("height","auto");
		}
		
		if(win_w > 1000){
			// mousehover animate
	
			//left_con
			$("li.left_con").mouseenter(function(){
				$(this).addClass("n1_on1");
				$(this).next("li.center_con").addClass("n1_on2");
				$(this).next().next("li.right_con").addClass("n1_on3");
			});
			
			$("li.left_con").mouseleave(function(){
				$(this).removeClass("n1_on1");
				$(this).next("li.center_con").removeClass("n1_on2");
				$(this).next().next("li.right_con").removeClass("n1_on3");
			});
			
			
			//li_center_con
			$("li.center_con").mouseenter(function(){
				$(this).addClass("n2_on1");
				$(this).prev("li.left_con").addClass("n2_on2");
				$(this).next("li.right_con").addClass("n2_on3");
			});
			
			$("li.center_con").mouseleave(function(){
				$(this).removeClass("n2_on1");
				$(this).prev("li.left_con").removeClass("n2_on2");
				$(this).next("li.right_con").removeClass("n2_on3");
			});
			
			//tf_con1
			$(".tf_con").mouseenter(function(){
				$(this).addClass("s1_on1");
				$(this).next(".tf_con2").addClass("s1_on2");
			});
			$(".tf_con").mouseleave(function(){
				$(this).removeClass("s1_on1");
				$(this).next(".tf_con2").removeClass("s1_on2");
			});
			
			//tf_con2
			$(".tf_con2").mouseenter(function(){
				$(this).addClass("s2_on1");
				$(this).prev(".tf_con").addClass("s2_on2");
			});
			$(".tf_con2").mouseleave(function(){
				$(this).removeClass("s2_on1");
				$(this).prev(".tf_con").removeClass("s2_on2");
			});
			
			//li.right_con
			
			$("li.right_con").mouseenter(function(){
				$(this).addClass("n3_on1");
				$(this).prev().prev("li.left_con").addClass("n3_on2");
				$(this).prev("li.center_con").addClass("n3_on3");
			});
			
			$("li.right_con").mouseleave(function(){
				$(this).removeClass("n3_on1");
				$(this).prev().prev("li.left_con").removeClass("n3_on2");
				$(this).prev("li.center_con").removeClass("n3_on3");
			});
			
			//section2
			
			$(".content_cover > ul > li.first").mouseenter(function(){
				$(this).addClass("on");
				$(".content_cover > ul > li.second").addClass("off");
			});
			
			$(".content_cover > ul > li.first").mouseleave(function(){
				$(".content_cover > ul > li").removeClass("on off");
			});
			
			$(".content_cover > ul > li.second").mouseenter(function(){
				$(this).addClass("on");
				$(".content_cover > ul > li.first").addClass("off");
			});
			
			$(".content_cover > ul > li.second").mouseleave(function(){
				$(".content_cover > ul > li").removeClass("on off");
			});
			
			// seciton3
			
			$(".c3_first").mouseenter(function(){
				$(this).addClass("on");
				$(".c3_second").addClass("off");
			});
			
			$(".c3_first").mouseleave(function(){
				$(".c3_first, .c3_second").removeClass("on off");
			});
			
			$(".c3_second").mouseenter(function(){
				$(this).addClass("on");
				$(".c3_first").addClass("off");
			});
			
			$(".c3_second").mouseleave(function(){
				$(".c3_first, .c3_second").removeClass("on off");
			});
			
			// content3
			$(".c3_first > ul > li").eq(0).mouseenter(function(){
				$(this).addClass("c1_on1");
				$(".c3_first > ul > li").eq(1).addClass("c1_on2");
				$(".c3_second > ul > li").eq(0).addClass("c2_on1");
				$(".c3_second > ul > li").eq(1).addClass("c2_on2");
			});
			
			$(".c3_first > ul > li").eq(0).mouseleave(function(){
				$(".c3_first > ul > li").removeClass("c1_on1 c1_on2");
				$(".c3_second > ul > li").removeClass("c2_on1 c2_on2");
			});
			//
			$(".c3_first > ul > li").eq(1).mouseenter(function(){
				$(this).addClass("c1_on1");
				$(".c3_first > ul > li").eq(0).addClass("c1_on2");
				$(".c3_second > ul > li").eq(1).addClass("c2_on1");
				$(".c3_second > ul > li").eq(0).addClass("c2_on2");
			});
			
			$(".c3_first > ul > li").eq(1).mouseleave(function(){
				$(".c3_first > ul > li").removeClass("c1_on1 c1_on2");
				$(".c3_second > ul > li").removeClass("c2_on1 c2_on2");
			});
			//
			$(".c3_second > ul > li").eq(0).mouseenter(function(){
				$(this).addClass("c2_on1");
				$(".c3_second > ul > li").eq(1).addClass("c2_on2");
				$(".c3_first > ul > li").eq(0).addClass("c1_on1");
				$(".c3_first > ul > li").eq(1).addClass("c1_on2");
			});
			
			$(".c3_second > ul > li").eq(0).mouseleave(function(){
				$(".c3_first > ul > li").removeClass("c1_on1 c1_on2");
				$(".c3_second > ul > li").removeClass("c2_on1 c2_on2");
			});
			//
			$(".c3_second > ul > li").eq(1).mouseenter(function(){
				$(this).addClass("c2_on1");
				$(".c3_second > ul > li").eq(0).addClass("c2_on2");
				$(".c3_first > ul > li").eq(0).addClass("c1_on2");
				$(".c3_first > ul > li").eq(1).addClass("c1_on1");
			});
			
			$(".c3_second > ul > li").eq(1).mouseleave(function(){
				$(".c3_first > ul > li").removeClass("c1_on1 c1_on2");
				$(".c3_second > ul > li").removeClass("c2_on1 c2_on2");
			});
			//mousehover animate
		}
		
	}); // resize
	
	// 윈도우 시작시 resize 강제실행
	$(window).trigger("resize");
	
	// main_slide animate
	var num = 1;
	
	setInterval(function(){
		num++;
		if(num==4){num=1;}
	
		animate();
	},21000);
	
	animate();
	function animate(){
		
		$(".device").stop().fadeOut();
		$(".display_ani"+num).stop().fadeIn();
		
		$(".display_overbox").each(function(){
			var overbox = $(this).height();
			var overbox_img = $(this).children("img").height();
			var result_img = Math.ceil(overbox_img - overbox);
			
			$(this).children("img").stop().animate({
				"top" : -result_img
			},10000, function(){
				setTimeout(function(){
					$(".display_overbox > img").stop().animate({
						"top" : "0"
					},10000);
				},1000);
			});
		});
	}// main_slide animate
	
	
	//slide
	$(".slide_cover > ul > li").eq(0).siblings().css("left","100%");
	
	var i = 0;
	
	$(".bp_btn .next").click(function(){
		
		i++;
		if(i==10){i=0;}
		
		$(".slide_cover > ul > li").eq(i).css("left","100%").stop().animate({
			"left":"0"
		},600);
		
		$(".slide_cover > ul > li").eq(i-1).css("left","0").stop().animate({
			"left":"-100%"
		},600);
		return false;
		
	});
	
	
	$(".bp_btn .prev").click(function(){
		
		i--;
		
		$(".slide_cover > ul > li").eq(i).css("left","-100%").stop().animate({
			"left":"0"
		},600);
		
		$(".slide_cover > ul > li").eq(i+1).css("left","0").stop().animate({
			"left":"100%"
		},600);
		
		if(i==-1){i=9;}
		
		return false;
	});//

	
	// top_btn
	
	$(window).scroll(function(){
		var win_scr = $(window).scrollTop();
	
		if(win_scr <= 0){
			$("#top_btn").stop().fadeOut();
		}else if(win_scr >= 0){
			$("#top_btn").stop().fadeIn();
		}
	});
	
	$("#top_btn").click(function(){
		$("body, html").stop().animate({
			scrollTop : 0
		},1000);
	});
	
	
	// fix_nav
	$(".fix_nav > ul >li").mouseenter(function(){
		$(this).addClass("on");
	});
	
	$(".fix_nav > ul >li").mouseleave(function(){
		$(this).removeClass("on");
	});

	// close_btn
	
	$("#hamberger").click(function(){
		$(".fix_menu").stop().fadeIn();
		return false;
	});
	
	$(".close_btn").click(function(){
		$(".fix_menu").stop().fadeOut();
		return false;
	});

	// question mark
	$("#main").mousemove(function(e){
		
		var x = e.pageX/30;
		var y = e.pageY/30;
		
		$(".question_img img").css({
			"left" : x,
			"top" : y
		});
		
	});























}); //end