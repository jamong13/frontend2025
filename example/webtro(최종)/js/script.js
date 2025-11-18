$(function(){
	
	 $(document).bind("contextmenu", function(e) {
		alert('소스를 보고싶다면 날 취업시켜라');
		return false;
	});
	
	$(".slick").slick({           
		infinite: true , /* 맨끝이미지에서 끝나지 않고 다시 맨앞으로 이동 */         
		slidesToShow: 5, /* 화면에 보여질 이미지 갯수*/        
		slidesToScroll: 1,  /* 스크롤시 이동할 이미지 갯수 */         
		autoplay: true, /* 자동으로 다음이미지 보여주기 */         
		arrows: true, /* 화살표 */         
		dots:false, /* 아래점 */         
		autoplaySpeed:2000,/* 다음이미지로 넘어갈 시간 */         
		speed:400 , /* 다음이미지로 넘겨질때 걸리는 시간 */         
		pauseOnHover:true, /* 마우스 호버시 슬라이드 이동 멈춤 */
		responsive: [ 
			{breakpoint: 1280, settings: {slidesToShow:4}},
			{breakpoint: 768, settings: {slidesToShow:3}}
		]
});
	
	$(window).scroll(function(){
		var s = $(window).scrollTop();
		var off = $(".main_about").offset().top/4;
		var w = $(window).width();
		
			if(s>0){
				$("header, .navigator, .m_navigator_on").addClass("on");
			}else{
				$("header").removeClass("on");
				$("nav>ul>li>ul, .full_bg").stop().slideUp(300, function(){
					$("header, .navigator, .m_navigator_on").removeClass("on");
				});
			}
		
		if(s>off){
			countUp();
		}
		
		/* animation */
		
		$(".ani").each(function(){
			var offset = $(this).offset().top-$(window).height()/1.5;
			if(s>=offset){
				$(this).addClass("on");
			}else{
				$(this).removeClass("on");
			}
		})
		/*
		if($(".new_portfolio").hasClass("on")==true){
			$(".workon").css("margin-left",0);
			k=0;
		}
		*/
	});
	
	$("header").mouseenter(function(){
		var w = $(window).width();
		if(w>=1324){
			$("header, .navigator").addClass("on");
		}
	
		$("nav>ul>li>ul, .full_bg").stop().slideDown(300);
	});
	$("header").mouseleave(function(){
		var s = $(window).scrollTop();
		
		if(s>0){
			$("nav>ul>li>ul, .full_bg").stop().slideUp(300);
		}else{
			$("nav>ul>li>ul, .full_bg").stop().slideUp(300, function(){
				$("header, .navigator").removeClass("on");
			});
		}
		
	});
		
	$(window).resize(function(){
		var h = $(window).height();
		var w = $(window).width();
		$(".main_movie").height(h);
		if(w>1323){
			$(".mobile_menu").css("display","none");
			$(".navigator").css("display","block");
			$(".m_navigator_on").css("display","none");
		}else{
			$(".navigator").css("display","none");
			$(".m_navigator_on").css("display","block");
			$(".line, .navigator").removeClass("close");
			$(".full_menu").removeClass("on");
		}
		
	});
	
	$(".navigator").click(function(){
		var w = $(window).width();
		$(".line, .navigator").toggleClass("close");
		$(".full_menu").toggleClass("on");
	});
	$(".m_navigator_on").click(function(){
		$(".mobile_menu").addClass("on").css("display","block");
	});
	$(".m_navigator").click(function(){
		$(".mobile_menu").removeClass("on").css("display","none");
	});
	
	$(window).trigger("resize");
	
	
	for(var imgNum=1;imgNum<=24; imgNum++){
			$(".clients").append("<li><img src='./images/client"+imgNum+".png' alt=''/></li>");
	}
	
	
	
	
	
	
	$(window).trigger("scroll");
	
	
	
	
	
	function countUp(){
		if($(".b_txt").hasClass("on")==false){
			
			$(".b_txt ul .comma").each(function(){
				var t = $(this);
				var c = t.attr('data-count');
				
				$({count:0}).stop().animate({
					count:c
				},{
					duration:2000,
					progress:function(){
						var now = Math.ceil(this.count);
						if(now>=1000){
							var g = Math.floor(now/1000);
							var h = now-(g*1000);
							
							t.find(".over").text(g+",");
							
							if(h<10){
								t.find(".under").text("00"+h);
							}else if(h>=10 && h<100){
								t.find(".under").text("0"+h);
							}else{
								t.find(".under").text(h);
							}
						}else{
							
							t.find(".under").text(now);
							
						}
						
					}
				});
				
				
			});
			$(".b_txt ul .nocomma").each(function(){
				var t = $(this);
				var c = t.attr('data-count');
				
				$({count:0}).stop().animate({
					count:c
				},{
					duration:2000,
					progress:function(){
						var now = Math.ceil(this.count);
						
						t.find(".under").text(now);
							
						
						
					}
				});
				
				
			});
			
		}$(".b_txt").addClass("on")
		
	}
	
	
	$(".mobileGnb>li>a").click(function(){
		var display = $(this).next("ul").css("display")
		
		if(display=="none"){
			$(".mobileGnb>li>ul").stop().slideUp();
			$(this).next("ul").stop().slideDown();
		}else{
			$(this).next("ul").stop().slideUp();
		}	
		
	});
	
	$(".main_movie").mousewheel(function(event,d){
		var w = $(window).width();
		
		if(d<0){
			if(w>1340){
				var down=$(this).offset().top + $(this).height()-90;
			}else{
				var down=$(this).offset().top + $(this).height()-80;
			}
			
		$("html,body").stop().animate({
			"scrollTop":down
		},1000);
		}
	});
		
	$(".go_top").click(function(){
		$("html,body").stop().animate({
			"scrollTop":0
		},400);
	});
});










