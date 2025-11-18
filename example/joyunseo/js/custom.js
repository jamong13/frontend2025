// JavaScript Document
$(window).ready(function(){
	backsize();
	$(".menu > a").bind('click', false);
	$(".about_bnt > li > a").bind('click', false);
	$("a.arrow_l").bind('click', false);
	$("a.arrow_r").bind('click', false);
	navmouse();
	navwork(nowpage,"over");
	slidework(nowpage);
	slidemouse();
	mousewheel();
	homeSeton();
	requestwork();
	mnavwork();
	bottomWokrs();
	pofolwork();
	mobilework();
	loadScreen(ordernum);
	
	var ua = window.navigator.userAgent.toLowerCase(); 
	if ( /iphone/.test(ua) || /android/.test(ua) || /opera/.test(ua) || /bada/.test(ua) ) {  //모바일에서 접속 했을 경우
	     setH = brh();
		 log(setH);
	}else{
	}
});

/*------------------------------------------
 글로벌 변수
--------------------------------------------*/
var nowpage = 0; //현재페이지  home --> 0 , about --> 1 부터 차례대로 메뉴순서
var nownav = 0;
var pastpage = nowpage; // 과거페이지
var pastnav = false;
var totalpage = 4;
var setH;


function log(value){
	window.console&&console.log(value);
}

// 윈도우 가로 세로 사이즈
function brw(){
	var brw = $(window).width();
	return brw;
}

function brh(){
	var brh = $(window).height();
	return brh;
}



/*--------------------------------------------------------------
  백그라운드 풀 이미지 세팅
-----------------------------------------------------------------*/

function backsize(){
	
	$(window).resize(function(){
	  set1200();
	});
	
	set1200();
	setpage();
	function set1200(){
		setpage();
		$(".backwrap").css({"width":brw()});
		$(".backwrap").css({"height":brh()});
		$("#body_wrap").css({"width":brw()});
		$("#body_wrap").css({"height":brh()});
		
		$('.block').css({"width":brw(),"height":brh()});
		$('.m_nav_wrap').css({"height":brh()});
		$(".vewin_wrap").css({"height":brh()});
		
		var scaleV = (brw()-112)/(442/100);
		$('.symbol_wrap').animate({"-webkit-transform":"scale("+ scaleV/100 +")"});
		
		if(brw() > 1200){
			$("#top_wrap").css({"left":"50%","margin-left":-600});
			$(".vewin_wrap").css({"left":"50%","margin-left":-600});
		}else if(brw() < 1200){
			$("#top_wrap").css({"left":0,"margin":0});
			$(".vewin_wrap").css({"left":0,"margin":0});
		}
		
		
		
		if(brh() < 850){
			var setp = brh() - (499+30);
			if(setp > 130) setp = 130;
			if(setp < 50) setp = 50;
			$('.inputs_wrap > li > ul > li.inputwrap > textarea').css({"height":setp})
		}
		
		
	}
}


/*----------------------------------------------------------------
  네비게이션 마우스 작동
-----------------------------------------------------------------*/
function navmouse(){
		
$('.nav_inner > li').mouseover(function(){
	var idx = $(this).index();
	navwork(idx,"over")
});

$('.nav_inner > li').mouseleave(function(){
	var idx = $(this).index();
	navwork(idx,"leave")
});

$('.menu > a').click(function(){
	$("body").off("mousewheel");
	var idx = $(this).parent().parent().parent().index();
	if(idx != nowpage){
		navwork(idx,"click");
		slidework(idx);
		stagework(idx);
	  }
	nowpage = idx;
	pastpage = idx;
});

};

function navwork(ordernum,order){
	var le_arr = []; // 메뉴의 빨간 막대 길이 
	le_arr[0] = 45;
	le_arr[1] = 68;
	le_arr[2] = 50;
	le_arr[3] = 63;
	le_arr[4] = 62;
	
	if(order == "over"){
	  $('.m_nav_wrap .nav_inner > li').eq(ordernum).children().children("li.line_wrap").stop().animate({"width":le_arr[ordernum]},500,"easeInOutExpo");
	  $('.nav_wrap .nav_inner > li').eq(ordernum).children().children("li.line_wrap").stop().animate({"width":le_arr[ordernum]},500,"easeInOutExpo");
	
	  if(pastnav){
		// $('.nav_inner > li').eq(pastnav).children().children("li.line_wrap").stop().animate({"width":0},500,"easeInOutExpo");
	  }
	
	  pastnav = ordernum;
	}
	
	if(order == "leave"){
		if(ordernum != nowpage){
		 $('.m_nav_wrap .nav_inner > li').eq(pastnav).children().children("li.line_wrap").stop().animate({"width":0},500,"easeInOutExpo");
		 $('.nav_wrap .nav_inner > li').eq(pastnav).children().children("li.line_wrap").stop().animate({"width":0},500,"easeInOutExpo");
		} 
	}
	

	if(order == "click"){
		  $('.m_nav_wrap .nav_inner > li').eq(ordernum).children().children("li.line_wrap").stop().animate({"width":le_arr[ordernum]},500,"easeInOutExpo");
		  $('.m_nav_wrap .nav_inner > li').eq(pastpage).children().children("li.line_wrap").stop().animate({"width":0},500,"easeInOutExpo");
		  
		  $('.nav_wrap .nav_inner > li').eq(ordernum).children().children("li.line_wrap").stop().animate({"width":le_arr[ordernum]},500,"easeInOutExpo");
		   $('.nav_wrap .nav_inner > li').eq(pastpage).children().children("li.line_wrap").stop().animate({"width":0},500,"easeInOutExpo");
		
	}
}


//-----------스왑 아이콘-------------------------------------------------//

var swap = false;

function mnavwork(){
	$('.swap_icon').click(function(){
	  if(!swap){
		$('.m_nav_wrap').css({"display":"block","right":"-150px"});
		$('.m_nav_wrap').stop().animate({"right":0},500,"easeInOutExpo");
		$('.swap_icon > div.swapli01').stop().animate({"opacity":0},500);
		$('.swap_icon > div.swapli04').stop().animate({"opacity":0},500);
		$('.swap_icon > div.swapli02').stop().rotate({animateTo:40})
		$('.swap_icon > div.swapli03').stop().rotate({animateTo:-40})
		swap = true;
	  }else{
		  
		$('.m_nav_wrap').stop().animate({"right":-150},500,"easeInOutExpo");
		$('.swap_icon > div.swapli01').stop().animate({"opacity":1},500);
		$('.swap_icon > div.swapli04').stop().animate({"opacity":1},500);
		$('.swap_icon > div.swapli02').stop().rotate({animateTo:0})
		$('.swap_icon > div.swapli03').stop().rotate({animateTo:0})
		swap = false;
	  }
	})
}

/*----------------------------------------------------------------
  슬라이드 메뉴
-----------------------------------------------------------------*/

function slidework(ordernum){
	$(".slide_dot > li").eq(ordernum).stop().animate({"background-color":"#f1c652"},500);
	$(".slide_ring > li").eq(ordernum).stop().animate({"opacity":1},500);
	$(".slide_ring > li").eq(ordernum).rotate({animateTo:270});

	if(pastpage != ordernum){
	  $(".slide_dot > li").eq(pastpage).stop().animate({"background-color":"#b2b2b2"},500);
	  $(".slide_ring > li").eq(pastpage).stop().animate({"opacity":0},500)
	  $(".slide_ring > li").eq(pastpage).rotate({animateTo:0});
	}
}


function slidemouse(){
	$(".slide_ring > li").click(function(){
		$("body").off("mousewheel");
		var idx = $(this).index();
		if(nowpage != idx){
			slidework(idx);
			navwork(idx,"click");
			stagework(idx);
		}
		nowpage = idx;
		pastpage = nowpage;
	});
}


/*----------------------------------------------------------------
  바디셋 (페이지 wrap)
-----------------------------------------------------------------*/

function setpage(){
	$("#body_wrap > div").each(function(){
		var idx = $(this).index();
		if(idx == nowpage){$(this).css({"top":0})}else{$(this).css({"top":brh()})};
		
	});
}

function stagework(ordernum){
	  if(ordernum == 1){aboutcontOn();}
	  if(ordernum == 3){contactus();}
	if(ordernum > pastpage){
	   $(".backwrap").eq(pastpage).css({"z-index":1});
	   $(".backwrap").eq(ordernum).css({"z-index":2,"top":brh()});
	   $(".backwrap").eq(ordernum).stop().animate({"top":0},1000,"easeInOutExpo",function(){
		   mousewheel();
		   $(".backwrap").each(function(){
		      var idx = $(this).index();
			  if(idx != nowpage){$(this).css({"top":brh()})}
		   })
		   
		   });
	}else{
	   $(".backwrap").eq(pastpage).css({"z-index":1});
	   $(".backwrap").eq(ordernum).css({"z-index":2,"top":-brh()});
	   $(".backwrap").eq(ordernum).stop().animate({"top":0},1000,"easeInOutExpo",function(){
		   mousewheel();if(ordernum == 3){contactus();}
		   $(".backwrap").each(function(){
		      var idx = $(this).index();
			  if(idx != nowpage){$(this).css({"top":brh()})}
		   })
		   
		   
		   });
	  // $(".backwrap").eq(pastpage).stop().animate({"top":brh()},1000,"easeInOutExpo");
	}
}


/*----------------------------------------------------------------
  마우스 휠
-----------------------------------------------------------------*/

function mousewheel(){
 $("body").on("mousewheel", function (event) { 
    var delta = event.originalEvent.deltaY;
     //var delta = event.originalEvent.wheelDelta;
	if(delta > 0){ //마우스를 아래로 내릴 때
	 //log(548)
		$("body").off("mousewheel"); //마우스 휠 이벤트 삭제 --> 페이지가 이동 중 휠 이벤트가 중복으로 작동하는 것을 방지
	     //log("n="+nowpage)
		var orderpage = nowpage+1; //등장 할 다음 페이지 index
         //log("o="+orderpage);
		if(orderpage < totalpage){  

			stagework(orderpage);
			navwork(orderpage,"click");
			slidework(orderpage);
			
			nowpage = orderpage;
			pastpage = orderpage;
		}else{mousewheel();} // 마지막 페이지에서는 휠이벤트가 삭제되어 작동하지 않는 관계로 해당 함수를 다시 실행해서 휠 이벤트를 부활 시킨다.
		
	}else if(delta < 0){ //마우스를 위로 올릴 때
		$("body").off("mousewheel");
		
		var orderpage = nowpage-1;
		if(orderpage > -1){
			stagework(orderpage);
			navwork(orderpage,"click");
			slidework(orderpage);
			
			nowpage = orderpage;
			pastpage = orderpage;
		}else{mousewheel();}
	}
 });
}



/*---------------------------------------------------------------------
 첫 화면 로딩 모션
 --------------------------------------------------------------------*/
 
function homeSeton(){
	function navset(){
		$('#top_wrap').css({"top":-70})
		$('#top_wrap').stop().animate({"opacity":1,"top":28},1000,"easeInOutExpo")
		$(".slide_ring").css({"right":-80})
		$(".slide_dot").css({"right":-80})
		$('#bottom_wrap').css({"bottom":-100})
		$('.slide_ring').stop().animate({"opacity":1,"right":0},1000,"easeInOutExpo")
		$('.slide_dot').stop().animate({"opacity":1,"right":8},1000,"easeInOutExpo")
		$('#bottom_wrap').stop().animate({"bottom":20},1000,"easeInOutExpo")
	}
	
	
	var lp_arr=[];
	lp_arr[0]= 0
	lp_arr[1]= 221
	lp_arr[2]= 420
	lp_arr[3]= 0
	lp_arr[4]= 0
	lp_arr[5]= 221
	
	var tp_arr = [];
	tp_arr[0]= 0
	tp_arr[1]= 0
	tp_arr[2]= 127
	tp_arr[3]= 127
	tp_arr[4]= 367
	tp_arr[5]= 368
	
	
	function symworks(){
		$('.symbol_wrap > img').each(function(){
			var idx = $(this).index();
			$('.piece0'+idx).css({"top":Math.random()*500,"left":(Math.random()*1000)-300});
			$('.piece0'+idx).delay(idx*10).animate({"top":tp_arr[idx],"left":lp_arr[idx],"opacity":1},1000,"easeInOutExpo");
			$('.piece0'+idx).rotate({angle:270});
			$('.piece0'+idx).rotate({animateTo:0});
		});
	}
	
	function txtwork(){
		$('.message_wrap > li').each(function(){
			var idx = $(this).index();
			$(this).delay(idx*200).animate({'opacity':1},2000);
		});
  }
  
    var timeoutID1;
    symworks();

	
	
	 var showAlert = setTimeout(function() {
        txtwork();
     }, 1000);
	 
	  var showAlert2 = setTimeout(function() {
        navset();
     }, 1500);
	
	//var timeoutID2 = window.setTimeout(navset(), 10000);
	
}




function loadScreen(ordernum){
	if(ordernum > 1 ){$("body").off("mousewheel");}
	var idx = ordernum;
	if(nowpage != idx){
		 slidework(idx);
		 navwork(idx,"click");
		 stagework(idx);
	}
		nowpage = idx;
		pastpage = nowpage;
}

/*---------------------------------------------------------------------------------------------
 contact us
----------------------------------------------------------------------------------------------*/

function contactus(){
	var le_arr = [];
		le_arr[0] = 422;
		le_arr[1] = 422;
		le_arr[2] = 422;
		le_arr[3] = 225;
		le_arr[4] = 422;
		le_arr[5] = 84;
		le_arr[6] = 322;
		le_arr[7] = 238;
		le_arr[8] = 198;
		le_arr[9] = 200;
		

	
	$('.map_wrap > .map_inner > div').css({'opacity':0});
	for(i=0; i<le_arr.length; i++){
		switch(i){
			case 0 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 1 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 2 : $('.map_inner > div').eq(i).css({"width":0}); 
			break;
			
			case 3 : $('.map_inner > div').eq(i).css({"width":0}); 
			break;
			
			case 4 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 5 : $('.map_inner > div').eq(i).css({"width":0}); 
			break;
			
			case 6 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 7 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 8 : $('.map_inner > div').eq(i).css({"height":0}); 
			break;
			
			case 9 : $('.map_inner > div').eq(i).css({"width":0}); 
			break;
		}
	}
	
	$('.map_wrap > .map_inner > div').each(function(){
		var idx = $(this).index();	
		
		switch(idx){
			case 0 : $('.map_inner > div').eq(idx).delay(0).animate({"height":le_arr[idx]+"px","opacity":1},2000,"easeInOutExpo");
			break;
			
			case 1 : $('.map_inner > div').eq(idx).delay(300).animate({"height":le_arr[idx]+"px","opacity":1},2000,"easeInOutExpo"); 
			break;
			
			case 2 : $('.map_inner > div').eq(idx).delay(300).animate({"width":le_arr[idx]+"px","opacity":1},2000,"easeInOutExpo"); 
			break;
			
			case 3 : $('.map_inner > div').eq(idx).delay(500).animate({"width":le_arr[idx]+"px","opacity":1},2000,"easeInOutExpo"); 
			break;
			
			case 4 : $('.map_inner > div').eq(idx).delay(700).animate({"height":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo");
			break;
			
			case 5 : $('.map_inner > div').eq(idx).delay(700).animate({"width":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo"); 
			break;
			
			case 6 :$('.map_inner > div').eq(idx).delay(1000).animate({"height":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo");
			break;
			
			case 7 : $('.map_inner > div').eq(idx).delay(1300).animate({"height":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo");
			break;
			
			case 8 : $('.map_inner > div').eq(idx).delay(1500).animate({"height":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo"); 
			break;
			
			case 9 : $('.map_inner > div').eq(idx).delay(1500).animate({"width":le_arr[idx]+"px","opacity":0.5},2000,"easeInOutExpo",function(){
				
				      $('.map_wrap > div').animate({"opacity":1},1000,"easeOutExpo"); 
				}); 
			break;
		}
	});
}



/*---------------------------------------------------------------------------------------------
 request
----------------------------------------------------------------------------------------------*/

function requestwork(){
	$('.inputs_wrap > li > ul > li.inputwrap > input').focus(function(){
		$(this).animate({"background-color":"#e7e7e7","color":"#4f4f4f"},100,"easeOutExpo")
		$('#bottom_wrap').css({"display":"none"})
		//$("#body_wrap").css({"height":setH+100});
		//$(".backwrap").css({"height":setH+100});
		//$(".vewin_wrap").css({"height":setH+100});
	})
		
	$('.inputs_wrap > li > ul > li.inputwrap > input').blur(function(){
		$(this).animate({"background-color":"#343439","color":"#72727e"},100)
		$('#bottom_wrap').css({"display":"block"})
		//$("#body_wrap").css({"top":0,"height":setH+100});
		//$(".backwrap").css({"top":0,"height":setH+100});
		//$(".vewin_wrap").css({"top":0,"height":setH+100});
	})	
	
	$('.inputs_wrap > li > ul > li.inputwrap > textarea').focus(function(){
		$(this).animate({"background-color":"#e7e7e7","color":"#4f4f4f"},600)
		$('#bottom_wrap').css({"display":"none"})
		//$("#body_wrap").css({"height":setH+100});
		//$(".backwrap").css({"height":setH+100});
		//$(".vewin_wrap").css({"height":setH+100});
	})
		
	$('.inputs_wrap > li > ul > li.inputwrap > textarea').blur(function(){
		$(this).animate({"background-color":"#343439","color":"#72727e"},500)
		$('#bottom_wrap').css({"display":"block"});
		//$("#body_wrap").css({"top":0,"height":setH+100});
		//$(".backwrap").css({"top":0,"height":setH+100});
		//$(".vewin_wrap").css({"top":0,"height":setH+100});
	})	
	
	$('a.bnt').mouseover(function(){
		$(this).animate({"background-color":"#f1c652","color":"#fff"})
	})
	
	$('a.bnt').mouseleave(function(){
		$(this).animate({"background-color":"#343439","color":"#72727e"})
	})
}


function formreq(){
	
	
	$('.warning_wrap > ul > li.bnt').click(function(){
		$('.warning_wrap').css({"display":"none"});
		$('.block').css({"display":"none"});
		switch(reason){
			case("name") : frm.name.focus();
			break;
			
			case("phone") : frm.phone.focus();
			break;
			
			case("cont") : frm.cont.focus();
			break;
		}
	});
	
	var frm = document.refrm;
	var reason = "none";
	
	if(frm.name.value == "" || frm.phone.value == "" || frm.cont.value == ""){
		 $('.warning_wrap').css({"display":"block"});
		 $('.warning_wrap > ul > li.text').text("성함, 연락처, 내용을 입력하세요");
		 $('.block').css({"display":"block"});
		 return;
	}
	else{
		$('.warning_wrap').css({"display":"block"});
		$('.warning_wrap > ul > li.text').text("전송되었습니다!");
		$('.block').css({"display":"block"});
		 return;
	}
	
	/*if(frm.phone.value == ""){
	     $('.warning_wrap').css({"display":"block"});
		 $('.warning_wrap > ul > li.text').text("연락처를 입력해 주세요");
		 $('.block').css({"display":"block"});
		 reason = "phone"
		 return;
    }
    if(frm.cont.value == ""){
		 $('.warning_wrap').css({"display":"block"});
		 $('.warning_wrap > ul > li.text').text("내용을 입력해 주세요");
		 $('.block').css({"display":"block"});
		 reason = "cont"
		 return;
	}
	*/
	/*var send_url = "/design_lab/mailto.php?expense="+frm.expense.value+"&phone="+frm.phone.value+"&name="+frm.name.value+"&email="+frm.email.value+"&cont="+frm.cont.value;
	
	$('#iframe_send').attr("src",send_url);*/
	//frm.submit();
}


/*---------------------------------------------------------------------------------------------
 about
----------------------------------------------------------------------------------------------*/

function gotoWork(){
	    $("body").off("mousewheel");
		var idx = 2;
        navwork(idx,"click");
		slidework(idx);
		stagework(idx);
	
	    nowpage = idx;
	    pastpage = idx;
}

var aboutCount = 0;
function aboutcontOn(){
		
	aboutCount++;
	
	if(aboutCount < 2){
	
	var nownum = 0;
	var pastnum = nownum
	var twd =$('.conts_wrap > div').width();
	var gap = 70;


    var timeset
	timeset = setInterval(function(){seton(1,"first");},800)
	var setnum = 0;
	function seton(num,time){	
		if(time != "first"){
			for(var i=1;i<4;i++){
				$('.conts_wrap > div.cont0'+i+'> ul > li').removeClass('on');
			}
		}
		$('.conts_wrap > div.cont0'+num+'> ul > li').addClass('on');
		setnum++;

		if(setnum >= 4){
			clearInterval(timeset);
		}
	}
	
	$('a.arrow_l').mouseover(function(){
	   $(this).addClass('on')
	})
	
	$('a.arrow_l').mouseleave(function(){
		$(this).removeClass('on')
	})
	
	$('a.arrow_r').mouseover(function(){
		//log('on')
		$(this).addClass('on')
	})
	
	$('a.arrow_r').mouseleave(function(){
		$(this).removeClass('on')
	})
	
	
	var clickNum = 0;
	$('a.arrow_r').click(function(){
		movecont("right",1);
		
		clickNum++;
		if(clickNum>=3) return;
		
		if(clickNum==2){
			graph();
		};
		
	})
	
	$('a.arrow_l').click(function(){
		movecont("left",1);
		
		clickNum--;
		if(clickNum<0) return;
		
		
	})
	
	$(window).resize(function(){
		positionSet();
	})
	
	positionSet();
	function positionSet(){
		twd = $('.conts_wrap > div').width();
	    
		switch(nownum){
			case 0 :
			  for(var i=1; i<4; i++){
			    $('.conts_wrap > .cont0'+i).css({"left":(i-1)*(twd+gap)});
			  }   
			break;
			
			case 1 :
			    $('.conts_wrap > .cont01').css({"left":-(twd+gap)});
				$('.conts_wrap > .cont02').css({"left":0});
				$('.conts_wrap > .cont03').css({"left":(twd+gap)});
			break;
			
			case 2 :
			    $('.conts_wrap > .cont01').css({"left":-2*(twd+gap)});
				$('.conts_wrap > .cont02').css({"left":-(twd+gap)});
				$('.conts_wrap > .cont03').css({"left":0});
			break;
		}
	}

	
	function movecont(atd,amount){
		var nowpos = [];
		
		if(atd == "right"){
			if(nownum < 2) {
			 nownum++;
			 nownum = nownum*amount;
			 seton(nownum+1,"second");
			 for(var i=0; i<3; i++){
				 nowpos[i] = $('.conts_wrap > .cont0'+(i+1)).css('left');
				 var stl = nowpos[i].length;
				 var newpos = nowpos[i].substring(0,stl-2);
				$('.conts_wrap > .cont0'+(i+1)).stop().animate({"left":newpos - (twd+gap)*amount},500,"easeInOutExpo");
                
			  }  
			}
		}else{
			if(nownum > 0) {
				nownum--
				if(amount == "2"){nownum = 0}
				nownum = nownum*amount;
				seton(nownum+1,"second");
			 for(var i=0; i<3; i++){
				 nowpos[i] = $('.conts_wrap > .cont0'+(i+1)).css('left');
				 var stl = nowpos[i].length;
				 var newpos = nowpos[i].substring(0,stl-2);
			    $('.conts_wrap > .cont0'+(i+1)).stop().animate({"left":Number(newpos) + (twd+gap)*amount},500,"easeInOutExpo");
			  } 
			}
		}
		
		botbntworks(nownum);
		
	}
	

	
	
	
	
	function botbntworks(num){
		$('.about_bnt > li').children('a').removeClass('on');
		$('.about_bnt > li').eq(num).children('a').addClass('on');
	}
	
	
	$('.about_bnt > li').click(function(){
		var idx = $(this).index();
		var clgap = idx - nownum;
		if(idx==2){
			graph();
		}
		
		if(idx != nownum){

			 if(clgap < 0){movecont("left",clgap*-1)}else{movecont("right",clgap)}
			 botbntworks(idx);
			 nownum = idx;
		}
		
		
		
		console.log(idx);
	});
	function graph(){
		if($(".charts").hasClass("on")==false){
			$(".chart").each(function(){
				var p = $(this).find(".percent-number");
				var pData = p.attr("data-percent");
				var leftCircle = $(this).find(".left .circle-mask-inner");
				var rightCircle = $(this).find(".right .circle-mask-inner");
				
				$({ percent:0 }).delay(600).animate({
					percent:pData
				},{
					duration:5000,
					progress:function(){
						var now = this.percent;
						var deg = now*360/100;
						var degRight = Math.min(Math.max(deg,0),180);
						var degLeft = Math.min(Math.max(deg-180,0),180);
						leftCircle.css("transform","rotate("+degLeft+"deg)");
						rightCircle.css("transform","rotate("+degRight+"deg)");
						p.text(Math.ceil(this.percent));
					}
				});
			});
		}$(".charts").addClass("on");
	}
	// li 클릭시 그 안에 싸고이쓴 a 태그 클릭일 때 먹통이 되므로 a태그에도 반복해서 명령문을 써줌
	$('.about_bnt > li > a').click(function(){
		var idx = $(this).parent().index();
		var clgap = idx - nownum;
		if(idx != nownum){
			if(clgap < 0){movecont("left",clgap*-1)}else{movecont("right",clgap)}
			botbntworks(idx);
			nownum = idx;
		}
	});
  }
}//end aboutcontOn()


/*---------------------------------------------------------------------------------------------
bottom
----------------------------------------------------------------------------------------------*/

function bottomWokrs(){
	var show = false;
	var listnum = $('.sel_wrap').find('li').length;
	$('.sel_wrap').click(function(){
		if(show){
		   $(this).stop().animate({"height":22},500,"easeInOutExpo");
		   $(this).find('li').eq(1).rotate({animateTo:0})
		   show = false;
		}else{
		  $(this).stop().animate({"height":25*listnum},500,"easeInOutExpo")
		  $(this).find('li').eq(1).rotate({animateTo:90})
		  show = true;
		}
	});
	
	$('.sel_list > li').mouseover(function(){
		$(this).find('span').stop().animate({"color":"#7c7c7c"},500)
	});
	
	$('.sel_list > li').mouseleave(function(){
		$(this).find('span').stop().animate({"color":"#929292"},500)
	});
}




/*---------------------------------------------------------------------------------------------
pofol works
----------------------------------------------------------------------------------------------*/

function pofolwork(){
	

	$(window).resize(function(){
		positionSet();
	});
	
	positionSet();
	function positionSet(){
	  $('.pofol_list > li').each(function(){
		  var wd = $(this).width();
		  
		  if(brw() < 1054){
			  wd = 233;
		  }else{
			  wd = 273;
		  }
		  
		  
		  var gap = 27;
		  var idx = $(this).index();
		  //log((wd+gap)*idx)
	     $(this).css({"left":(wd+gap)*idx})
	  });
	}
	
	
	//스크롤바
	$(".pofol_wrap").mCustomScrollbar({
      axis:"x" // horizontal scrollbar
    });
	
	$('.pofol_list .over > li.tx').css({"opacity":0,"top":"40%"})
	
	$('.pofol_list > li a > ul > li').mouseover(function(){
		var idx = $(this).index();
		$(this).find('img').addClass('on')
		$(this).find('.over > li').eq(2).stop().animate({"opacity":0.7},200);
		$(this).find('.over > li.tx').eq(0).animate({"opacity":1,"top":"50%"},500,"easeOutExpo")
		$(this).find('.over > li.tx').eq(1).animate({"opacity":1,"top":"50%"},500,"easeOutExpo")
	});
	
	$('.pofol_list > li a > ul > li').mouseleave(function(){
		var idx = $(this).index();
		$(this).find('img').removeClass('on');
		$(this).find('.over > li').eq(2).stop().animate({"opacity":0},200);
		$(this).find('.over > li.tx').eq(0).stop().animate({"opacity":0,"top":"40%"},500,"easeInOutExpo")
		$(this).find('.over > li.tx').eq(1).stop().animate({"opacity":0,"top":"40%"},500,"easeInOutExpo")
	});
	
	
	$('.gotore_wrap').click(function(){
		$("body").off("mousewheel");
		var idx = 4;
        navwork(idx,"click");
		slidework(idx);
		stagework(idx);
	
	    nowpage = idx;
	    pastpage = idx;
	})
	
	$(window).resize(function(){
		
		rerqPos();
		
		})
	
	rerqPos();
	function rerqPos(){
		var rtop = 820;
		if(brh() > 970){$('.gotore_wrap').css({"bottom":150})}
		if(brh() < 971 && brh() > 920){$('.gotore_wrap').css({"bottom":150})}
		if(brh() < 921 && brh() > 760){$('.gotore_wrap').css({"bottom":100})}
		if(brh() < 761 && brh() > 320){$('.gotore_wrap').css({"bottom":50})}

	}
	
}


function gotoFade(addr){
	$('body').stop().animate({"opacity":0},500,function(){
		
		location.href = "/design_lab/pofol/"+addr+".php";
		
		})
}


function mobilework(){
    
	document.addEventListener("touchstart",touchMoveHandler1,false);
	document.addEventListener("touchend",touchMoveHandler2,false);
	document.addEventListener("touchmove",touchMoveHandler3,false);
	
	var touchYstart;
	var touchYend;
	
	function touchMoveHandler1(e){
		//e.preventDefault();
		var touch = e.touches[0] || e.changeTouches[0];
		touchYstart = touch.pageY;
	}
	
	function touchMoveHandler2(e){
		//e.preventDefault();
       
		var direction = touchYstart - touchYend;
		//log(touchYend)
		if(touchYend != 0){
		  touchScroll(direction);
		  touchYend = 0;
		}

	}
	
	function touchMoveHandler3(e){
		e.preventDefault();
		var touch = e.touches[0] || e.changeTouches[0];
		touchYend = touch.pageY;
	}
	
	
	
	
	
	
	
	function touchScroll(delta){
	if(delta > 0){ //마우스를 아래로 내릴 때
	 //log(548)
		$("body").off("mousewheel"); //마우스 휠 이벤트 삭제 --> 페이지가 이동 중 휠 이벤트가 중복으로 작동하는 것을 방지
	     //log("n="+nowpage)
		var orderpage = nowpage+1; //등장 할 다음 페이지 index
         //log("o="+orderpage);
		if(orderpage < totalpage){  

			stagework(orderpage);
			navwork(orderpage,"click");
			slidework(orderpage);
			
			nowpage = orderpage;
			pastpage = orderpage;
		}else{mousewheel();} // 마지막 페이지에서는 휠이벤트가 삭제되어 작동하지 않는 관계로 해당 함수를 다시 실행해서 휠 이벤트를 부활 시킨다.
		
	}else if(delta < 0){ //마우스를 위로 올릴 때
		$("body").off("mousewheel");
		
		var orderpage = nowpage-1;
		if(orderpage > -1){
			stagework(orderpage);
			navwork(orderpage,"click");
			slidework(orderpage);
			
			nowpage = orderpage;
			pastpage = orderpage;
		}else{mousewheel();}
	}
	}

}