$(function(){
	$(window).resize(function(){
		var h = $(window).height();
		
		$(".box").height(h);
		$("#real_header").height(h);
	});
	$(window).trigger("resize");
	
	var figurew = $(".con figure").width();	
	$(".con figure").children("video").width(figurew);
	
	var figureh = $(".con figure video").height();	
	$(".con figure").height(figureh);
	
	$("#real_header").mousewheel(function(event,d){
		if(d<0){
			var vh = $(".con1 video").height();
			
			$(this).fadeOut(600);
			$(".box").eq(0).css("top","100%").animate({
				"top":0
			},600, "linear");
			$(".txt_box_cover").css("z-index",500);
			$(".txt_box").stop().animate({
				"width":"85%",
				"height":vh
			},600, "linear", function(){
				$(".txt_box_cover").css("z-index","-1");
			});
			
		}
	});
	
	
	$(".box").mousewheel(function(event,d){
		if(d<0){
			var next = $(this).next(".box");
			var i = $(this).index();
			
			
			if(i==1){
				var ih = $(".con2 .imgbox").height();
				
				$(this).stop().animate({
					"top":"-100%"
				},600, "linear");
				next.stop().animate({
					"top":"0"
				},600, "linear");
				$(".txt_box_cover").css("z-index",500);
				$(".txt_box").stop().animate({
					"width":"85%",
					"height":ih
				},600, "linear", function(){
					$(".txt_box_cover").css("z-index","-1");
				});			
				
			}else if(i==2){
				var vh = $(".con3 video").height();
				var figurew = $(".con3 figure").width();	
				$(".con3 figure").children("video").width(figurew);
					
				$(".con3 figure").height(vh);
			
				
				$(this).stop().animate({
					"top":"-100%"
				},600, "linear");
				next.stop().animate({
					"top":"0"
				},600, "linear");
				$(".txt_box_cover").css("z-index",500);
			
				$(".txt_box").stop().animate({
					"width":"85%",
					"height":vh
				},600, "linear", function(){
					$(".con3 figure").css({
						"border-color":"#3c3c3c",
						"right":"7.5%",
						"left":"auto",
						"transform":"translate(25px,-50%)"
					}).animate({
						"width":"40%"
					},600, "linear");
					$(".txt_box").css({
						"right":"7.5%",
						"left":"auto",
						"border-color":"transparent",
						"transform":"translate(25px,-50%)"
					}).animate({
						"width":"40%"
					},600, "linear", function(){
						$(".txt_box_cover").css("z-index","-1");
						$(".con3 .v_txt").stop().animate({
							"opacity":1
						},600);
					});
				});	

			}else if(i==3){
				var vh = $(".con4 video").height();
				var figurew = $(".con4 figure").width();	
				$(".con4 figure").children("video").width(figurew);
					
				$(".con4 figure").height(vh);
				
				
				$(this).stop().animate({
					"top":"-100%"
				},600, "linear");
				next.stop().animate({
					"top":"0"
				},600, "linear");
				
				$(".txt_box_cover").css("z-index",500);
				$(".con3 figure").css("border-color","transparent").animate({
					"width":"85%"
				});
				$(".con3 .v_txt").stop().animate({
					"opacity":0
				},600);
				$(".txt_box").css({
					"border-color":"#3c3c3c"
				}).animate({
					"width":"85%",
					"height":vh
				},600, "linear", function(){
					$(".con4 figure").css({
						"border-color":"#3c3c3c",
						"left":"7.5%",
						"right":"auto",
						"transform":"translate(-25px,-50%)"
					}).animate({
						"width":"40%"
					},600, "linear");
					$(".txt_box").css({
						"left":"7.5%",
						"right":"auto",
						"transform":"translate(-25px,-50%)",
						"border-color":"transparent"
					}).animate({
						"width":"40%"
					},600, "linear", function(){
						$(".txt_box_cover").css("z-index","-1");
						$(".con4 .v_txt").stop().animate({
							"opacity":1
						},600);
					});
				});	
				

				
			}else if(i==4){
				$(this).stop().animate({
					"top":"-100%"
				},600, "linear");
				next.stop().animate({
					"top":"0"
				},600, "linear");
				$(".con4 figure").css("border-color","transparent").animate({
					"width":"85%"
				},600, "linear");
				$(".txt_box").css("border-color","#3c3c3c").animate({
						"opacity":"0",
						"width":"85%"
				},600, "linear");
				$(".con4 .v_txt").stop().animate({
					"opacity":0
				},600);
				if($(".foot_con").hasClass("on") == false){
	
					var t = $(".foot_con .num");
					
					$({ Counter:0 }).stop().delay(400).animate({
						Counter:t.attr("data-count")
					},{
						duration:2000,
						progress:function(){
							t.text("0"+Math.ceil(this.Counter));
						}
					});
			
				}$(".foot_con").addClass("on");				
			}
			console.log(i);
		}else if(d>0){
			var prev = $(this).prev(".box");
			var i = $(this).index();
			
			if(i==1){
				$("#real_header").fadeIn(600);
				$(this).stop().animate({
					"top":"100%"
				},600, "linear");
				$(".txt_box").css({
						"left":"50%",
						"transform":"translate(-50%,-50%)"
					});
				$(".txt_box").stop().animate({
					"width":"70%",
					"height":"20%"
				},600, "linear");			
			}else if(i==5){
				var vh = $(".con4 video").height();
				var figurew = $(".con4 figure").width();	
				$(".con4 figure").children("video").width(figurew);
					
				$(".con4 figure").height(vh);
				$(this).stop().animate({
					"top":"100%"
				},600, "linear");
				prev.stop().animate({
					"top":"0"
				},600, "linear");
			
				
				$(".txt_box_cover").css("z-index",500);
				$(".txt_box").stop().animate({
					"width":"85%",
					"height":vh,
					"opacity":1
				},600, "linear", function(){
					$(".con4 figure").css({
						"border-color":"#3c3c3c",
						"left":"7.5%",
						"right":"auto",
						"transform":"translate(-25px,-50%)"
					}).animate({
						"width":"40%"
					},600, "linear");
					$(".txt_box").css({
						"left":"7.5%",
						"right":"auto",
						"transform":"translate(-25px,-50%)",
						"border-color":"transparent"
					}).animate({
						"width":"40%"
					},600, "linear", function(){
						$(".txt_box_cover").css("z-index","-1");
						$(".con4 .v_txt").stop().animate({
							"opacity":1
						},600);
					});
				});			
			}else if(i==4){
				var vh = $(".con3 video").height();
				var figurew = $(".con3 figure").width();	
				$(".con3 figure").children("video").width(figurew);
				
				$(this).stop().animate({
					"top":"100%"
				},600, "linear");
				prev.stop().animate({
					"top":"0"
				},600, "linear");
				
				$(".con4 .v_txt").stop().animate({
					"opacity":0
				},600);
				
				$(".con4 figure").css("border-color","transparent").animate({
					"width":"85%"
				});
				$(".txt_box").css({
					"border-color":"#3c3c3c"
				}).animate({
					"width":"85%",
					"height":vh
				},600, "linear", function(){
					$(".con3 figure").css({
						"border-color":"#3c3c3c",
						"right":"7.5%",
						"left":"auto",
						"transform":"translate(25px,-50%)"
					}).animate({
						"width":"40%"
					},600, "linear");
					$(".txt_box").css({
						"right":"7.5%",
						"left":"auto",
						"transform":"translate(25px,-50%)",
						"border-color":"transparent"
					}).animate({
						"width":"40%"
					},600, "linear", function(){
						$(".txt_box_cover").css("z-index","-1");
						$(".con3 .v_txt").stop().animate({
							"opacity":1
						},600);
				
					});
				});	
			}else if(i==3){
				var ih = $(".con2 .imgbox").height();
				
				$(this).stop().animate({
					"top":"100%"
				},600, "linear");
				prev.stop().animate({
					"top":"0"
				},600, "linear");
				$(".con3 .v_txt").stop().animate({
							"opacity":0
						},600);
				$(".con3 figure").css("border-color","transparent").animate({
					"width":"85%"
				},600, "linear");
				
				$(".txt_box_cover").css("z-index",500);
				$(".txt_box").css("border-color","#3c3c3c").animate({
					"width":"85%",
					"height":ih
				},600, "linear", function(){
					$("txt_box").css({
						"left":"50%",
						"top":"50%",
						"transform":"translate(-50%,-50%)"
					});
					$(".txt_box_cover").css("z-index","-1");
				});		
			}else if(i==2){
				var vh = $(".con1 video").height();
				
				$(this).stop().animate({
					"top":"100%"
				},600, "linear");
				prev.stop().animate({
					"top":"0"
				},600, "linear");
				$(".txt_box_cover").css("z-index",500);
				$(".txt_box").stop().animate({
				"width":"85%",
				"height":vh
			},600, "linear", function(){
				$(".txt_box_cover").css("z-index","-1");
			});	
			}
			console.log(i);
		}
	});
	
	$(".con3 figure").mouseover(function(){
		$(this).stop().animate({
			"width":"85%"
		},600);
		$(this).next(".v_txt").stop().animate({
			"opacity":0
		},600);
	});
	$(".con3 figure").mouseleave(function(){
		$(this).stop().animate({
			"width":"40%"
		},600);
		$(this).next(".v_txt").stop().animate({
			"opacity":1
		},600);
	});
	$(".con4 figure").mouseover(function(){
		$(this).stop().animate({
			"width":"85%"
		},600);
		$(this).next(".v_txt").stop().animate({
			"opacity":0
		},600);
	});
	$(".con4 figure").mouseleave(function(){
		$(this).stop().animate({
			"width":"40%"
		},600);
		$(this).next(".v_txt").stop().animate({
			"opacity":1
		},600);
	});
	
	$(".main_img li").eq(0).show();
	$(".main_img li").eq(0).siblings().hide();

	$(".btn li").eq(0).css("background-color","#888");
	
	var n=0;
	
	setInterval(function(){
		n++;
		if(n==3){n=0;}
		
		$(".main_img li").eq(n).fadeIn();
		$(".main_img li").eq(n-1).fadeOut();
		
		$(".btn li").eq(n).css("background-color","#888");
		$(".btn li").eq(n-1).css("background-color","#333");
		
		
	},4000);
	
	
	$(".btn li").click(function(){
		var i = $(this).index();
		
		if(n==i)return;
		
		$(".main_img li").eq(i).fadeIn();
		$(".main_img li").eq(n).fadeOut();
		
		n=i;
		
		$(this).css("background-color","#888");
		$(this).siblings().css("background-color","#333");
	});
	
	$(".con2_txt li").eq(0).show();
	$(".con2_txt li").eq(0).siblings().hide();
	
	
	$(".img_hover_cover li").mouseover(function(){
		var c = $(this).index();
		
		$(".con2_img li").removeClass("on");
		$(".con2_img li").eq(c).addClass("on");
		
		$(".con2_txt li").hide();
		$(".con2_txt li").eq(c).show();
		
	});
	$(".img_hover_cover li").mouseleave(function(){
		var c = $(this).index();
		
		$(".con2_img li").removeClass("on");
		
	});
	
	

	$(".foot_cover button").click(function(){
		$("#real_header").fadeIn(600);
		$(this).parent().parent().parent(".box").stop().animate({
			"top":"100%"
		},600, "linear");
		$(".txt_box").css({
				"left":"50%",
				"transform":"translate(-50%,-50%)"
			}).animate({
			"width":"70%",
			"height":"20%",
			"opacity":"1"
		},600, "linear");		
	});
	
	
	
});







