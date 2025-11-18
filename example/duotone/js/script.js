$(function(){

	var win_h = $(window).height();
	// window ready
	$(window).ready(function(){
		//처음 시작 화면 높이값 지정
		$(".win_h").height(win_h);
		
		//시작 화면 애니메이션
		$(".st0_cover > img").stop().animate({
			"opacity":"1"
		},600, function(){
			$(".text2").stop().animate({
				"opacity":"1"
			},400, function(){
				$(".text1").stop().animate({
					"opacity":"1"
				},500);
				$(".text5").stop().animate({
					"opacity":"1"
				},500, function(){
					$(".text7").stop().animate({
						"opacity":"1"
					},600, function(){
						$(".text3").stop().animate({
							"opacity":"0.6"
						},600);
						
						$(".text6").stop().animate({
							"opacity":"1"
						},700);
					});
				});
			});
			
			$(".text4").stop().animate({
				"opacity":"0.6"
			},400);
		}); // 시작화면 애니메이션
		
		$(window).trigger('resize');
	});
	
	// window scroll
	
	$(window).scroll(function(){
		
		var scr = $(window).scrollTop();
		// 첫번째화면 스크롤시 opacity값 조절
		var section0_opacity = scr/600;
		
		$("#section0").css("opacity",1-section0_opacity);
		
		if(section0_opacity > 1){
			$("#section0").css("opacity","0");
		}else if (section0_opacity < 0){
			$("#section0").css("opacity","1");
		} // 첫번째화면 스크롤시 opacity값 조절
		
		// 메인화면 opacity 0 일시 아래글귀 opacity1
		var st0_o = $("#section0").css("opacity");
		
		if(st0_o == "0"){
			$("#section1").stop().animate({
				"opacity":"1"
			},600);
		}else{
			$("#section1").stop().animate({
				"opacity":"0"
			},600);
		}// 메인화면 opacity 0 일시 아래글귀 opacity1
		
		
		//section2 offset().top;
		
		var st2_off = $("#section2").offset().top-300;
		
		if(scr > st2_off){
			$(".st2_cover ul li.left").stop().animate({
				"opacity":"1"
			},400, function(){
				$(".st2_cover ul li.right").stop().animate({
					"opacity":"1",
					"top":"0"
				},400);
			});
		}else{
			$(".st2_cover ul li.left").stop().animate({
				"opacity":"0"
			},400, function(){
				$(".st2_cover ul li.right").stop().animate({
					"opacity":"0",
					"top":"20%"
				},400);
			});
		}
		
		//section3 offset().top;
		var st3_off = $("#section3").offset().top-500;
		
		if(scr > st3_off){
			$("#section3 .text_box").addClass("on");
			$("#section3 .hide_box").addClass("on");
		}else{
			$("#section3 .text_box").removeClass("on");
			$("#section3 .hide_box").removeClass("on");
		}
		
		//section4 offset().top;
		
		var st4_off = $("#section4").offset().top;
		
		if(scr > st4_off-500){
			$("#section4 .st4_cover .chapter2").stop().animate({
				"opacity":"1"
			},500);
			$("#section4 .st4_cover .main_txt").stop().animate({
				"opacity":"1"
			},500);
		}else{
			$("#section4 .st4_cover .chapter2").stop().animate({
				"opacity":"0"
			},500);
			$("#section4 .st4_cover .main_txt").stop().animate({
				"opacity":"0"
			},500);
		}
		
		$(".st4_cover > ul > li.cover").each(function(){
			var off = $(this).offset().top-500;
			
			if(scr > off){
				$(this).find(".text").stop().animate({
					"top":"50%",
					"opacity":"1"
				},500);
				$(this).find(".svg").stop().animate({
					"opacity":"1"
				},500);
			}else{
				$(this).find(".text").stop().animate({
					"top":"60%",
					"opacity":"0"
				},500);
				$(this).find(".svg").stop().animate({
					"opacity":"0"
				},500);
			}
		});
		
		//section5 offset
		
		var st5_off = $("#section5").offset().top;
		
		if(scr > st5_off-300){
			$("#section5 .st5_cover img").stop().animate({
				"opacity":"1"
			},500, function(){
				$("#section5 .st5_cover .st5_text").stop().animate({
					"opacity":"1",
					"top":"50%"
				},400);
			});
		}else{
			$("#section5 .st5_cover img").stop().animate({
				"opacity":"0"
			},500, function(){
				$("#section5 .st5_cover .st5_text").stop().animate({
					"opacity":"0",
					"top":"60%"
				},400);
			});
		}
		
		// section6
		
		var st6_off = $("#section6").offset().top;
		
		if(scr > st6_off-400){
			$("#section6 .st6_cover .chapter3").stop().animate({
				"opacity":"1"
			},500);
			$("#section6 .st6_cover .main_txt").stop().animate({
				"opacity":"1"
			},500);
			$("#section6 .st6_cover .st6_txt").stop().animate({
				"top":"0",
				"opacity":"1"
			},500);
		}else{
			$("#section6 .st6_cover .chapter3").stop().animate({
				"opacity":"0"
			},500);
			$("#section6 .st6_cover .main_txt").stop().animate({
				"opacity":"0"
			},500);
			$("#section6 .st6_cover .st6_txt").stop().animate({
				"top":"10%",
				"opacity":"0"
			},500);
		}
		
		var st6_txt = $(".st6_cover .st6_txt").offset().top;
		
		if(scr > st6_txt-200){
			$("#section6 .st6_cover ul li").addClass("on");
		}else{
			$("#section6 .st6_cover ul li").removeClass("on");
		}
		
		// section7 offset
		
		var st7_off = $("#section7").offset().top;
		var st7_off2 = $("#section7").offset().top+500;
		
		var st7_h = $("#section7").height();
		var st8_off = $("#section8").offset().top;
		
		if(scr > st7_off-300 && scr < st8_off-600){
			$(".st7_cover").fadeIn(1000);
		}else{
			$(".st7_cover").fadeOut(1000);
		}
		
		if(scr > st7_off2){
			$(".st7_txt").fadeIn();
		}else{
			$(".st7_txt").fadeOut();
		}
		
		// section8.offset().top;
		
		
		
		if(scr > st8_off-600){
			
			$(".st8_left .chapter4").stop().animate({
				"opacity":"1"
			},500);
			$(".st8_right .main_txt").stop().animate({
				"opacity":"1"
			},500);
		}else{
			$(".st8_left .chapter4").stop().animate({
				"opacity":"0"
			},500);
			$(".st8_right .main_txt").stop().animate({
				"opacity":"0"
			},500);
			
		}
		
		if(scr > st8_off+100){
			$(".st8_right .st8_txt").stop().animate({
				"opacity":"1",
				"top":"0"
			},500);
		}else{
			$(".st8_right .st8_txt").stop().animate({
				"opacity":"0",
				"top":"10%"
			},500);
		}
		
		$(".st8_right ul li").each(function(){
			var st8_li = $(this).offset().top;
			
			if(scr > st8_li-400){
				$(this).stop().animate({
					"opacity":"1"
				},500);
			}else{
				$(this).stop().animate({
					"opacity":"0"
				},500);
			}
		});
		
		//section9.offset().top;
		
		var st9_off = $("#section9").offset().top;
		
		if(scr > st9_off-400){
			$("#section9 .st9_cover .chapter5").stop().animate({
				"opacity":"1"
			},500,function(){
				$("#section9 .st9_cover .main_txt").stop().animate({
					"opacity":"1"
				},500);
			});
		}else{
			$("#section9 .st9_cover .chapter5").stop().animate({
				"opacity":"0"
			},500,function(){
				$("#section9 .st9_cover .main_txt").stop().animate({
					"opacity":"0"
				},500);
			});
		}
		
		if(scr > st9_off-300){
			$("#section9 .st9_cover .st9_txt").stop().animate({
				"opacity":"1",
				"top":"0"
			},500);
		}else{
			$("#section9 .st9_cover .st9_txt").stop().animate({
				"opacity":"0",
				"top":"5%"
			},500);
		}
		
		// section10.offset().top;
		
		var st10_off = $("#section10").offset().top;
		
		if(scr > st10_off){
			$("#section10").addClass("on");
		}else if (scr < st10_off){
			$("#section10").removeClass("on");
		}
		
		var st10_cover = $("#section10 .st10_cover").offset().top;
		
		if(scr > st10_cover-200){
			$("#section10 .st10_cover .st10_left").addClass("on");
			$("#section10 .st10_cover .st10_right").addClass("on");
		}else{
			$("#section10 .st10_cover .st10_left").removeClass("on");
			$("#section10 .st10_cover .st10_right").removeClass("on");
		}
		
		//section11.offset().top;
		
		var st11_off = $("#section11").offset().top;
		
		if(scr > st11_off){
			$("#section11").addClass("on");
		}else{
			$("#section11").removeClass("on");
		}
		
		var st11_cover = $(".st11_cover").offset().top;
		
		if(scr > st11_cover-300){
			$("#section11 .st11_cover .st11_right").addClass("on");
			$("#section11 .st11_cover .st11_left").addClass("on");
		}else{
			$("#section11 .st11_cover .st11_right").removeClass("on");
			$("#section11 .st11_cover .st11_left").removeClass("on");
		}
		
		// section12.offset().top;
		
		var st12_off = $("#section12").offset().top;
		
		if(scr > st12_off){
			$("#section12").addClass("on");
		}
		else{
			$("#section12").removeClass("on");
		}
		
		if(scr > st12_off+300){
			$("#section12 .st12_cover .st12_left").addClass("on");
			$("#section12 .st12_cover .st12_right").addClass("on");
		}else{
			$("#section12 .st12_cover .st12_left").removeClass("on");
			$("#section12 .st12_cover .st12_right").removeClass("on");
		}
		
		
		// section14.offset().top;
		
		var st14_off = $("#section14").offset().top;
		
		if(scr > st14_off-600){
			$("#section14 .st14_cover .chapter6").stop().animate({
				"opacity":"1"
			},500);
			$("#section14 .st14_cover .st14_txt").stop().animate({
				"opacity":"1",
				"top":"0"
			},500);
		}else{
			$("#section14 .st14_cover .chapter6").stop().animate({
				"opacity":"0"
			},500);
			$("#section14 .st14_cover .st14_txt").stop().animate({
				"opacity":"0",
				"top":"5%"
			},500);
		}
		
		//section15.offset().top;
		
		var st15_off = $("#section15").offset().top;
		
		if(scr > st15_off-400){
			$("#section15").addClass("on");
			$("#section15 .st15_txt").addClass("on");
			$("#section15 .st15_hidebox").addClass("on");
		}
		
		// section16.offset().top;
		
		var st16_off = $("#section16").offset().top;
		
		if(scr > st16_off-200){
			$(".left_fi").stop().animate({
				"left":"50%",
				"top":"55%"
			},1000);
			$(".right_fi").stop().animate({
				"left":"38%",
				"top":"55%"
			},1000);
		}else{
			$(".left_fi").stop().animate({
				"left":"45%",
				"top":"60%"
			},1000);
			$(".right_fi").stop().animate({
				"left":"40%",
				"top":"50%"
			},1000);
		}
		
		var st16_cover = $(".st16_cover").offset().top;
		
		if(scr > st16_cover-600){
			$(".st16_cover .st16_txt").stop().animate({
				"opacity":"1",
				"top":"0"
			},500);
		}else{
			$(".st16_cover .st16_txt").stop().animate({
				"opacity":"0",
				"top":"5%"
			},500);
		}
		
		// 로고 스크롤
		var st3_off = $("#section3").offset().top;
		var st3_h = $(".st3_bg").height();
		var result_st3 = st3_off + st3_h;
		
		var st7_h = $("#section7").height();
		var result_st7 = st7_off + st7_h;
		
		var header_h = $("#header").height();
		
		var scr_h = scr+header_h;
		
		//section3
		if(scr_h > st3_off && scr_h < result_st3){
			$("#header .logo a.on").css("display","none");
			$("#header .logo a.off").css("display","block");
			
			$(".ham a .line1").css("background-color","#fff");
			$(".ham a .line2").css("background-color","#fff");
			$(".ham a .line3").css("background-color","#fff");
			
		}else if(scr_h > result_st3 && scr_h < st7_off){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
			
		}else if(scr_h < st3_off){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
		}
		
		
		//section7
		if(scr_h > st7_off && scr_h < result_st7){
			$("#header .logo a.on").css("display","none");
			$("#header .logo a.off").css("display","block");
			
			$(".ham a .line1").css("background-color","#fff");
			$(".ham a .line2").css("background-color","#fff");
			$(".ham a .line3").css("background-color","#fff");
			
		}else if(scr_h < st7_off && scr_h > result_st3){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
			
		}else if(scr_h > result_st7 && scr_h < st10_off){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
		}
		
		var st10_h = $("#section10").height();
		var st11_h = $("#section11").height();
		var st12_h = $("#section12").height();
		var st13_h = $("#section13").height();
		
		var result_st_all = st10_off+st10_h+st11_h+st12_h+st13_h-40;
		
		
		
		//section10~13
		if(scr_h > st10_off && scr_h < result_st_all){
			$("#header .logo a.on").css("display","none");
			$("#header .logo a.off").css("display","block");
			
			$(".ham a .line1").css("background-color","#fff");
			$(".ham a .line2").css("background-color","#fff");
			$(".ham a .line3").css("background-color","#fff");
			
		}else if(scr_h < st10_off && scr_h > st8_off){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
			
		}else if(scr_h > result_st_all){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
		}
		
		//section15
		
		var st15_img_h = $(".st15_cover img").height();
		var result_st15 = st15_off+st15_img_h;
		
		if(scr_h > st15_off && scr_h < result_st15){
			$("#header .logo a.on").css("display","none");
			$("#header .logo a.off").css("display","block");
			
			$(".ham a .line1").css("background-color","#fff");
			$(".ham a .line2").css("background-color","#fff");
			$(".ham a .line3").css("background-color","#fff");
		}else if(scr_h < st15_off && scr_h > st14_off+240){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
		}else if(scr_h > result_st15){
			$("#header .logo a.on").css("display","block");
			$("#header .logo a.off").css("display","none");
			
			$(".ham a .line1").css("background-color","#555");
			$(".ham a .line2").css("background-color","#555");
			$(".ham a .line3").css("background-color","#555");
		}
		
		
	}); // scroll function;

	
	
	// slick1

	$(".slide").slick({
		speed : 600,
		draggable : true,
		slidesToShow : 1,
		arrows : false,
		dotsClass : "dots",
		dots : true,
	});

	//sub_menu
	
	
	
	$(".ham").click(function(){
		
		var ham = $("#sub_menu").css("display");
		
		if(ham == "none"){
			$("#header .ham a .line1").stop().animate({
				"width":"0",
				"background-color":"#fff"
			},200,function(){
				$("#header .ham a .line2").stop().animate({
					"width":"0",
					"background-color":"#fff"
				},200, function(){
					$("#header .ham a .line3").stop().animate({
						"width":"0",
						"background-color":"#fff"
					},200, function(){
						$("#header .ham a .line4").stop().animate({
							"width":"30px"
						},200, function(){
							$("#header .ham a .line5").stop().animate({
								"width":"30px"
							},200);
						});
					});
				});
			});
			
			$("#sub_menu").stop().slideDown(600);
			
			$(".sub_right").stop().delay(600).slideDown();
			
			$(".sub_left").stop().delay(1000).animate({
				"left":"0",
				"opacity":"1"
			},400);
			
			$(".center_bg").stop().delay(1400).animate({
				"top" : "50%",
				"opacity" : "1"
			},400);
			
			$("body, html").css("overflow","hidden");
			
		}else{
			
			$("#header .ham a .line5").stop().animate({
				"width":"0"
			},200,function(){
				$("#header .ham a .line4").stop().animate({
					"width":"0"
				},200, function(){
					$("#header .ham a .line3").stop().animate({
						"width":"30px",
						"background-color":"#555"
					},200, function(){
						$("#header .ham a .line2").stop().animate({
							"width":"30px",
							"background-color":"#555"
						},200, function(){
							$("#header .ham a .line1").stop().animate({
								"width":"30px",
								"background-color":"#555"
							},200);
						});
					});
				});
			});
			
			$("#sub_menu").stop().slideUp(600);
			
			$(".sub_left").stop().animate({
				"left":"-10%",
				"opacity":"0"
			},100);
			
			$(".center_bg").stop().animate({
				"top" : "60%",
				"opacity" : "0"
			},400);
			
			$(".sub_right").stop().slideUp();
			
			$("body, html").css("overflow","visible");
		}
		
		return false;
		
	}); //ham click
	
	$(window).resize(function(){
		var win_w = $(window).width();
		
		if(win_w < 1200){
			$("#section3").css("height","auto");
			$("#section15").css("height","auto");
		}else{
			$(".win_h").height(win_h);
		}
	});

}); //end