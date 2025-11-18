$(function(){
	
	//popup
	
	$("#popup").draggable();
	
	if($.cookie("popup")=="none"){
		$("#popup").hide();
	}
	
	var check = $("#check");
	
	$("#check").on("click",close);
	
	function close(){
		
		if(check==("checked")){
			$.cookie("popup","none",{expires:1, path:"/"});
		}
		
		$("#popup").fadeOut();
		
	}
	
	$(".pop_top img").click(function(){
		$("#popup").fadeOut();
	});
	
	//header
	
	$(".menu .nav li").mouseover(function(){
		$(".fulldown").css({
			"border-top":"2px solid #68A12A"
		});
		
		$(this).find("a").css("color","#68a12a");
	});
	
	$(".menu .nav li").mouseleave(function(){
		$("#header").css({
			"border-bottom":"0"
		});
		
		$(this).find("a").css("color","#585858");
	});
	
	$(".full_right a").mouseover(function(){
		$(this).animate({
			"top" : "48%"
		},300, function(){
			$(this).animate({
				"top" : "50%"
			},300);
		});
	});
	
	$(".full_center ul li").mouseover(function(){
		var i = $(this).index();
		
		$(".full_left img").css("display","none");
		$(".full_left .num"+i).css("display","block");
		
		$(".fulldown").css({
			"border-top":"2px solid #68A12A"
		});
		
		$(".menu .nav li").eq(i).find("a").css("color","#68a12a");
	});
	
	$(".full_center ul li").mouseleave(function(){
		var i = $(this).index();
		
		$(".full_left img").css("display","none");
		$("#header").css({
			"border-bottom":"0"
		});
		
		$(".menu .nav li").eq(i).find("a").css("color","#585858");
	});
	
	$(".menu .nav li, .fulldown").mouseover(function(){
		$(".fulldown").css("display","block");
		
		$("#header").css({
			"border-bottom":"2px solid #68A12A"
		});
	});
	
	$(".menu .nav li, .fulldown").mouseleave(function(){
		$(".fulldown").css("display","none");
		$("#header").css({
			"border-bottom":"0"
		});
	});
	
	//header end

	
	//section0
	
	//fullpage
	/*
	new fullpage('#section0',{
		navigation: true,
		navigationPosition: 'right'
	}); */
	
	// right_btn click
	
	var pager_k = 0;
	var pager_i;
	//
	$("#right_btn ul li").click(function(){
		pager_i = $(this).index();
		
		if(pager_i>pager_k){
			$("section").eq(pager_i).css("top","100%").animate({
				"top":0
			},600);
			$("section").eq(pager_k).css("top","0%").animate({
				"top":"-100%"
			},600);
		}else if(pager_i<pager_k){
			$("section").eq(pager_i).css("top","-100%").animate({
				"top":0
			},600);
			$("section").eq(pager_k).css("top","0%").animate({
				"top":"100%"
			},600);
		}
		
		pager_k=pager_i;
		
		$("#right_btn ul li").removeClass("on");
		$(this).addClass("on");
	});//
	
	$(window).scroll(function(){
		var scr = $(window).scrollTop();
		var st_2 = $("#section2").offset().top;
		
		var width2 = $(window).width();
		
		if(scr > st_2 && width2 < 1024){
			$(".white_banner ul li").eq(0).animate({
				"top":"0",
				"opacity":"1"
				},400, function(){
					$(".white_banner ul li").eq(1).stop().animate({
						"top":"0",
						"opacity":"1"
					},400, function(){
						$(".white_banner ul li").eq(2).stop().animate({
							"top":"0",
							"opacity":"1"
						},400);
				});
			});
		}
	});
	
	$(".side_menu").scroll(function(){
		
		var wi = $(this).scrollTop()+20;
		
		$(".x_btn").css("top",wi);
		
		
	});
	
	
	
	// section 스크롤
	
	
	$(window).resize(function(){
		//section height
		var height = $(window).height();
		var width = $(window).width();
		var video = $("video").height();
		
		if(width > 1024){
			$(".height").height(height);
		}else if(width < 1024 && width > 760){
			$("#section0").height(height);
		}else{
			$(".height").css("height","auto");
		}
		
		
		if(width > 1024 ){
			
			$("section").on("mousewheel DOMMousescroll", wheely);
			
		}else{
			$("section").off("mousewheel DOMMousescroll", wheely);
		}
	}); //resize
	
	$(window).trigger('resize');
	//section
	function wheely(event, d){
		
		var t = $(this);
		var tNum = t.index();
		
		
		$("section").off("mousewheel DOMMousescroll");
		if(d<0){
			
			var n = $(this).next();
			
			if(n.index()==5) return;
			
			if(tNum == 1){
				$(".white_banner ul li").eq(0).delay(600).animate({
					"top":"0",
					"opacity":"1"
				},400, function(){
					$(".white_banner ul li").eq(1).animate({
						"top":"0",
						"opacity":"1"
					},400, function(){
						$(".white_banner ul li").eq(2).animate({
							"top":"0",
							"opacity":"1"
						},400);
					});
				});
			}
			if(tNum==4){
				if(t.css("top")=="0px"){
					t.stop().animate({
						"top":"-350px"
					},600);
				}
			}else{
				t.css("top","0").stop().animate({
					"top":"-100%"
				},600);
				
				n.css("top","100%").stop().animate({
					"top":"0"
				},600);
			}
			
			// 중간애니메이션
			
			
			$("#right_btn ul li").removeClass("on");
			$("#right_btn ul li").eq(tNum+1).addClass("on");
			
			if(tNum==4){
				$("#right_btn ul li").eq(tNum).addClass("on");
			}
			
			
			
		}else if(d>0){
							
			var n = $(this).prev();
			if(tNum==0) return;
			
			if(tNum==4){
				if($(this).css("top")=="-350px"){
					$(this).stop().animate({
						"top":0
					},600);
				}
				else{
					t.css("top",0).animate({
						"top":"100%"
					},600);
					n.css("top","-100%").animate({
						"top":"0"
					},600);
				}
			}else{
				t.css("top",0).animate({
					"top":"100%"
				},600);
				n.css("top","-100%").animate({
					"top":"0"
				},600);
				
			}
			console.log(tNum);
			
			$("#right_btn ul li").removeClass("on");
			$("#right_btn ul li").eq(tNum-1).addClass("on");
			
		}
		setTimeout(function(){
			$("section").on("mousewheel DOMMousescroll", wheely);
		},600);
		
		pager_k=tNum;
	}
	//footer
	
	$(".sns_cover .brand_site a").click(function(){
		$(this).next("ul.cf").css("display","block");
		
		return false;
	});
	
	$(".sns_cover .brand_site > ul").mouseleave(function(){
		$(this).hide();
	});


	// mobile
	
	$(".hamberger").click(function(){
		$(".side_menu").stop().animate({
			"left" : "0"
		},600);
	});
	
	$(".side_menu .x_btn").click(function(){
		$(".side_menu").stop().animate({
			"left" : "-50%"
		},600);
	});

	// searchbox
	
	$(".header_cover .h-right form .mobile").click(function(){
		
		var d = $(".mo_search").css("display");
		
		if(d == "none"){
			$(".mo_search").show();
		}else{
			$(".mo_search").hide();
		}
		
		
	});
	

























}); //end