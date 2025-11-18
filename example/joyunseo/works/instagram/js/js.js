$(function(){
	$(".search input").click(function(){
		$(this).parent(".search").addClass("on");
	});
	$(".close").click(function(){
		$(this).parent(".search").removeClass("on");
	});
	
	$(".gnb li").click(function(){
		
		var i = $(this).index();
		
		$(".gnb li").removeClass("black");
		$(this).addClass("black");
		
		$("article").css("display","none");
		$("article").eq(i).css("display","block");
		
	});
	
	$(".me .text span").click(function(){
		
		$("article").css("display","none");
		$("article.contact").css("display","block");
		
		$(".gnb li").removeClass("black");
		$(".gnb li").eq(3).addClass("black");
		
	});
	
	$(window).scroll(function(){
			var scr = $(this).scrollTop();
			
			if(scr){
				graph();
			}
		});
	
	
	function graph(){
			
		if($(".charts").hasClass("on")==false){
		
			$(".chart").each(function(){
				var p = $(this).find(".percent-number");
				var pData = p.text();
				
				var leftCircle = $(this).find(".left .circle-mask-inner");
				var rightCircle = $(this).find(".right .circle-mask-inner");
				
				$({ percent:0 }).animate({
					percent:pData
				},{
					duration:1500,
					progress:function(){
						p.text(Math.ceil(this.percent));
						
						var now = this.percent;
						var deg = now*360/100;
						var degRight = Math.min(Math.max(deg,0),180);
						var degLeft = Math.min(Math.max(deg-180,0),180);
						
						leftCircle.css("transform","rotate("+degLeft+"deg)");
						rightCircle.css("transform","rotate("+degRight+"deg)");
					}
				});
			});
		}$(".charts").addClass("on");
	
	}
	
	
	$(".direct ul input").click(function(){
		$(".direct ul input").css("background-color","transparent");
		$(".direct ul textarea").css("background-color","transparent");
		$(this).css("background-color","#ececec");
	});
	
	$(".direct ul textarea").click(function(){
		$(".direct ul input").css("background-color","transparent");
		$(this).css("background-color","#ececec");
	});
	
	
	
	
	
	
	
	
	
});