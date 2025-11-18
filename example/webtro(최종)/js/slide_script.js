$(function(){

var k = 0; 
var img_length;
var clone_length;

var repeat;
$(window).on("load",function(){
	var w = $(window).width();
	
	if(w>=1000){
		$(".workon_cover").removeClass("active4").addClass("active5");		
	}else if(w<1000){
		$(".workon_cover").removeClass("active5").addClass("active4");	
	}
	
	if($(".workon_cover").hasClass("active5")==true){
		var c = $(".workon li:lt(5)").clone();
		clone_length = c.length;
		
		$(".workon").append(c);
		img_length = $(".workon li").length;
		
		$(".workon").width((100/clone_length)*img_length+"%");
		$(".workon li").width(100/img_length+"%");
		$(".workon").css("margin-left",0);
		 k = 0;
		 console.log(img_length,clone_length);
	}
	
	if($(".workon_cover").hasClass("active4")==true){
		var c = $(".workon li:lt(3)").clone();
		clone_length = c.length;
		
		$(".workon").append(c);
		img_length = $(".workon li").length;
		
		$(".workon").width((100/clone_length)*img_length+"%");
		$(".workon li").width(100/img_length+"%");
		$(".workon").css("margin-left",0);
		k = 0;
		
		console.log(img_length,clone_length);
	}
});



timer();
function timer(){
	repeat = setInterval(next_slide,3000);
}
$(".btns.next").on("click",next_slide);
$(".btns.prev").on("click",prev_slide);
$(".btns").mouseover(function(){
	clearInterval(repeat);
});
$(".btns").mouseleave(function(){
	timer();
});
function next_slide(){
	clearInterval(repeat);
	$(".btns.next").off("click",next_slide);
	$(".btns.prev").off("click",prev_slide);
	if(k==img_length-clone_length){
		k=0;
		$(".workon").stop().css({
			"margin-left":-k*(100/clone_length)+"%"
		});
	}
	k++;
	$(".workon").stop().animate({
			"margin-left":-k*(100/clone_length)+"%"
	},400, function(){
		$(".btns.next").on("click",next_slide);
		$(".btns.prev").on("click",prev_slide);
		timer();
	});
	console.log(k)
}
function prev_slide(){
	clearInterval(repeat);
	$(".btns.next").off("click",next_slide);
	$(".btns.prev").off("click",prev_slide);
	
	if(k==0){
		k=img_length-clone_length;
		$(".workon").stop().css({
			"margin-left":-k*(100/clone_length)+"%"
		});
	}
	k--;
	$(".workon").stop().animate({
			"margin-left":-k*(100/clone_length)+"%"
	},400, function(){
		$(".btns.next").on("click",next_slide);
		$(".btns.prev").on("click",prev_slide);
		timer();
	});
		console.log(k)
}
	
	/*
	var k = 0;
	var repeat;
	
	
	function timer(){
		repeat = setInterval(function(){
			if(k==10){
				k=0;
				$(".workon").css("margin-left",0);
			}
		
			k++;
		
			slide();
		
		},3000);
	}
	
	function slide(){
		$(".btns.prev").off("click");
		$(".btns.next").off("click");
		$(".workon").stop().animate({
			"margin-left":-k*(100/5)+"%"
		},400,function(){
			$(".btns.next").on("click", right_click);
			$(".btns.prev").on("click", left_click);
		});
	}
	
	$(".btns").mouseover(function(){
		clearInterval(repeat);
	});
	$(".btns").mouseleave(function(){
		timer();
	});
	
	$(".btns.next").on("click",right_click);
	
	function right_click(){
		if(k==10){
			k=0;
			$(".workon").css("margin-left",0);
		}
		k++;
		
		slide();
		
	}
	
	$(".btns.prev").on("click",left_click);
	var margin = $(".workon").width()/2+"%";
	function left_click(){
		var li = $(".workon li").width();
		if(k==0){
			k=10;
			$(".workon").css({
				"margin-left":-margin
			});
		}
		k--;
		
		slide();
	}*/
});
	