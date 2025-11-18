$(function(){
	
	//window ready
	$(window).ready(function(){
		$(window).trigger('resize');
		
		//시작 애니메이션
		
		$(".circle1").stop().animate({
			"left":"55%"
		},1000, function(){
			$(".circle1").stop().animate({
				"left":"48%"
			},500, function(){
				$(".circle1").stop().animate({
					"width":"120px",
					"border-radius":"50px"
				},400, function(){
					$(".circle1").stop().animate({
						"width":"80px",
						"left":"50%",
						"transform":"translateX(-50%)"
					},400, function(){
						$(".circle1").stop().animate({
							"left":"40%",
							"top":"30%"
						},400, function(){
							$(".circle1").stop().animate({
								"left":"50%",
								"top":"45%"
							},400, function(){
								$(".circle1").stop().animate({
									"border-radius":"0",
									"width":"100%",
									"height":"100%",
									"top":"0",
									"left":"0",
									"transform":"translate(0)"
								},500, function(){
									$(".circle2, .circle3, .circle4").css("display","none");
									$("#fix-animation").fadeOut();
								});
							});
						});
					});
				});
			});
		});
		
		
		$(".circle2").stop().animate({
			"right":"55%"
		},1000, function(){
			$(".circle2").stop().animate({
				"right":"48%"
			},500, function(){
				$(".circle2").stop().animate({
					"width":"120px",
					"border-radius":"50px"
				},400, function(){
					$(".circle2").stop().animate({
						"width":"80px",
						"left":"50%",
						"transform":"translateX(-50%)"
					},400, function(){
						$(".circle2").stop().animate({
							"left":"60%",
							"top":"30%"
						},400, function(){
							$(".circle2").stop().animate({
								"left":"50%",
								"top":"45%"
							},400);
						});
					});
				});
			});
		});
		
		$(".circle3").delay(2300).animate({
			"opacity":"1",
			"left":"39%",
			"top":"55%"
		},400, function(){
			$(".circle3").stop().animate({
				"left":"49.5%",
				"top":"45%"
			},400);
		});
		
		$(".circle4").delay(2300).animate({
			"opacity":"1",
			"left":"59.5%",
			"top":"55%"
		},400, function(){
			$(".circle4").stop().animate({
				"left":"49.5%",
				"top":"45%"
			},400);
		});
		
		$(".blind1").stop().animate({
			"width":"50%"
		},830);
		
		$(".blind2").stop().animate({
			"width":"50%"
		},830);
		
	});
	
	//window resize
	
	$(window).resize(function(){
		var win_height = $(window).height();
		$(".section").height(win_height);
	});
	
	$(window).trigger("resize");
	
	// menubar-click
	$(".menu-bar").click(function(){
		var fix = $("#menubar-fix").css("display");
		
		if(fix == "none"){
			$("#menubar-fix").fadeIn();
		
			$(".menu-bar a .stick1").stop().animate({
				"transform":"rotate(45deg)",
				"top":"18px"
			},300);
			$(".menu-bar a .stick2").stop().animate({
				"transform":"rotate(-45deg)",
				"bottom":"18px"
			},300);
			
			$("header .right-nav ul li a").css("color","#fff");
			$(".stick1, .stick2").css("background-color","#fff");
			
			$(".dot-header").fadeOut();
			$("html,body").css("overflow","hidden");
		}else{
			$("#menubar-fix").fadeOut();
			
			$(".menu-bar a .stick1").stop().animate({
				"transform":"rotate(0deg)",
				"top":"12px"
			},300);
			$(".menu-bar a .stick2").stop().animate({
				"transform":"rotate(0deg)",
				"bottom":"12px"
			},300);
			
			$("header .right-nav ul li a").css("color","#333");
			$(".stick1, .stick2").css("background-color","#333");
			
			$(".dot-header").fadeIn();
			$("html,body").css("overflow","visible");
		}
		
		return false;
	}); // menubar-click
	
	var i = null;
	var k = 0;
	
	//dot-header click
	$(".dot-header ul li").click(function(){
		i = $(this).index();
		
		$(".full_cover").stop().animate({
			"top": i*"-100"+"%"
		},1000);
		
		$(".dot-header ul li").removeClass("on").eq(i).addClass("on");
		
		console.log(i);
	}); //오른쪽 상단 스크롤바 클릭버튼
	
	//mouseenter animate
	$(".section5-btn a").mouseenter(function(){
		$(this).find("p").stop().animate({
			"width":"100%",
			"border-radius":"30px"
		},400, function(){
			$(this).find("p").stop().animate({
				"left":"auto",
				"right":"0",
				"width":"50px",
				"height":"50px"
			},400);
		});
	})
	
	$(".section5-btn a").mouseleave(function(){
		$(this).find("p").stop().animate({
			"width":"100%",
			"border-radius":"30px"
		},400, function(){
			$(this).find("p").stop().animate({
				"left":"0",
				"right":"auto",
				"width":"50px",
				"height":"50px"
			},400);
		});
	})
	
	//footer family 버튼
	$(".family-btn").click(function(){
		
		var ul = $(this).children("ul").css("display");
		
		if(ul == "none"){
			$(this).children("ul").stop().fadeIn();
			$(".footright .family-btn p i").animate({
				"transform":"rotate(180deg)",
				"top":"20%"
			},300);
		}else{
			$(this).children("ul").stop().fadeOut();
			$(".footright .family-btn p i").animate({
				"transform":"rotate(0deg)",
				"top":"45%"
			},300);
		}
		
		return false;
	});
	
	//맨위로 버튼
	
	$("#top-btn").click(function(){
		$("html, body").stop().animate({
			scrollTop : 0 
		},1000);
	});
	
	$("#fullpage").on("mousewheel DOMMouseScroll", wheel);
	
	
	
	function wheel(event, delta){
		$("#fullpage").off("mousewheel DOMMouseScroll", wheel);
		event.preventDefault();
		
		if(delta < 0){
			i++;
			if(i==6){i=5;}
			
			$(".full_cover").stop().animate({
				"top": i*"-100"+"%"
			},1000, function(){
				$("#fullpage").on("mousewheel DOMMouseScroll", wheel);
			});
			$(".dot-header ul li").removeClass("on").eq(i).addClass("on");
			
			console.log(i);
		} // delta<0
		
		else if(delta > 0){
			i--;
			if(i==-1){i=0;}
			
			$(".full_cover").stop().animate({
				"top": i*"-100"+"%"
			},1000, function(){
				$("#fullpage").on("mousewheel DOMMouseScroll", wheel);
			});
			$(".dot-header ul li").removeClass("on").eq(i).addClass("on");
		}
		
	} //mousewheel
	

	
	
	
	
	
	
	
	
	
	
	


});