$(function(){
	$(".img0 .t_box").addClass("active");
		
		var slide = $(".bxslider").bxSlider({
			mode:"fade",
			auto:true,
			autoHover:true,
			speed:400,
			pause:3000,
			loop:true,
			onSlideBefore:function(){
				var i = slide.getCurrentSlide();
				
				if(i>0 && i<3){
					$(".gnb li").css("color","#333");
				}else{
					$(".gnb li").css("color","#fff");
				}
			
				$(".bxslider li .t_box").removeClass("active");
			},
			onSlideAfter:function(){
				var i = slide.getCurrentSlide();
				$(".bxslider li.img"+i+" .t_box").addClass("active");
			}
		});
		
		$(".next").click(function(){
			slide.goToNextSlide();
		});
		$(".prev").click(function(){
			slide.goToPrevSlide();
		});


	$(".logo a").mouseover(function(){
		$(this).children("img").animate({
		"marginLeft":"0"
		},200);
	});
	$(".logo a").mouseout(function(){
		$(this).children("img").animate({
		"marginLeft":"-56px"
		},200);
	});
 
 
	$(".gnb, .full").mouseover(function(){
		$(".gnb li").css("color","#333");
		$(".bottom_h .line").css("opacity","1");
	});
	$(".gnb, .full").mouseout(function(){
		$(".bottom_h .line").css("opacity","0");
		var i = slide.getCurrentSlide();
		
		if(i>0 && i<3){
			$(".gnb li").css("color","#333");
			$(".gnb li span").css("color","inherit");
			$(".full").mouseover(function(){
				$(".gnb li span").css("color","#333");
			});
			$(".full").mouseleave(function(){
				$(".gnb li span").css("color","inherit");
			});
		}else{
			$(".gnb li").css("color","#fff");
			$(".gnb li span").css("color","inherit");
			$(".full").mouseover(function(){
				$(".gnb li span").css("color","#333");
			});
			$(".full").mouseleave(function(){
				$(".gnb li span").css("color","inherit");
			});
		}
		
		console.log(i);
	});	
	
	
	
	$(".gnb li").mouseover(function(){
		var i = $(this).index();
		
		$(".full .full_cover ul").hide().eq(i).show();
		
		
	});
	
	$(".gnb li span").mouseover(function(){
		$(this).css("color","#ff6700");
	});
	$(".gnb li span").mouseleave(function(){
		$(this).css("color","#333");
	});
 
 
	$(".bottom_f p").click(function(){
		$(this).toggleClass("on");
		$(this).next("ul").toggleClass("on");
	});
	

	$(".con3 ul li .play_btn").click(function(){
		var i = $(this).parent("li").index();
		
		$(".video_box").eq(i).fadeIn();
		
	});
		
	$(".close.icon").click(function(){
		$(this).parent(".video_box_cover").stop().animate({
			"top":"-200%"		
		},1000 , function(){
			$(".video_box").fadeOut();
		});	
	});
	
	
	$("#m_menu_icon i").click(function(){
		$(this).hide();
		$("#m_menu").css("right","-50%").animate({
			"right":"0"
		});
	});
	$("#m_menu .fa-times").click(function(){
		$("#m_menu").css("right","0").animate({
			"right":"-50%"
		});
		$("#m_menu_icon i").show();
		$("#m_menu dd").slideUp();		
	});
	
	$("#m_menu dd").hide();
			
	$("#m_menu dt").click(function(){
		var k = $(this).next("dd").css("display");
				
		if(k=="none"){
			$("dd").stop().slideUp();
			$(this).next("dd").stop().slideDown();
		}else{
			$(this).next("dd").stop().slideUp();
		}
	});
	
	
	
	
	
});