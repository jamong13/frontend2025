$(function(){
	$(".topcon_slide li").eq(0).css("left","0");
	$(".topcon_slide li").eq(0).siblings().css("left","100%");

	var n=0;
	setInterval(function(){
		n++;
		
		if(n==3){n=0;}
		
		$(".topcon_slide li").eq(n).css("left","100%").animate({
			"left":"0"
		},500);
		$(".topcon_slide li").eq(n-1).css("left","0").animate({
			"left":"-100%"
		},500);
	},3000);
	
	$(".bc_img li").eq(0).show();
	$(".bc_img li").eq(0).siblings().hide();
	
	var s = 0;
	setInterval(function(){
		s++;
		
		if(s==4){s=0;}
		
		$(".bc_img li").eq(s).fadeIn(500);
		$(".bc_img li").eq(s-1).fadeOut(500);
		
	},4000);
	
	
	
	$(".bc_txt li").eq(0).css("left","0");
	$(".bc_txt li").eq(0).siblings().css("left","100%");
	
	var t = 0;
	setInterval(function(){
		t++;
		
		if(t==4){t=0;}
		
		$(".bc_txt li").eq(t).css("left","100%").animate({
			"left":"0"
		},500);
		$(".bc_txt li").eq(t-1).css("left","0").animate({
			"left":"-100%"
		},500);
	},4000);
	
	
	//달력
	
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth();
	
	var d = date.getDate();
// 현재월의 1일에 요일을 구합니다.
// 그럼 그달 달력에 첫 번째 줄 빈칸의 갯수 구할 수 있다.	
// theDay  목요일인 4가 저장	
	var theDate = new Date(y, m , 1);
	var theDay = theDate.getDay();

// 마지막 일 을 구해야 한다.
// 1~12월 까지 마지막 일을 배열로 저장함
	var last=[31,28,31,30,31,30,31,31,30,31,30,31];

/* 현재년도가 윤년(4년 주기이고 100 년 주기는 제외
  또는 400년 주기)일 경우 2월에 마지막 날짜는 29일임
*/	
 
	if(y%4==0  &&  y%100 != 0 ||  y%400 == 0 ) last[1]=29;	
		

	//현재 월에 마지막이 몇일인지 구합니다.	
	var lastDate=last[m];


	var row = Math.ceil((theDay+lastDate)/7);
	// 4 + 30 = 34 /7 = 4.852645 소수점 올림 5줄 필요
	// 현재월의 달력에 필요한 행의 개수를 구합니다.
	// 현재 요일값 + 월에 전체일수 / 7 한것을 올림한다.

	var selector = $('.bc_3 .month_ec');


	selector.prepend("<h4>" +y+"."+(m+1)+"."+d+"</h4>");

	var calendar="<table border='1'>";
	calendar+="<tr>"; // calendar = calendar + "<tr>"
	calendar+="<th>SUN</th>";
	calendar+="<th>MON</th>";
	calendar+="<th>TUE</th>";
	calendar+="<th>WED</th>";
	calendar+="<th>THU</th>";
	calendar+="<th>FRI</th>";
	calendar+="<th>SAT</th>";
	calendar+="</tr>";

	var dNum=1;
	for(var i=1; i<=row; i++ ){
		calendar+="<tr>";
		for(var k=1; k<=7; k++ ){
			if(i==1 && k<=theDay || dNum > lastDate ){
				calendar+="<td> &nbsp; </td>";
			}else{
				
				if(dNum==d){
					calendar+="<td class='today'><p>"+dNum+"</p></td>";
				}else{
					calendar+="<td><p>"+dNum+"</p></td>";						
				}
				dNum++;
				
			}
		
		}
		calendar+="</tr>";
	}
	calendar+="</table>"
	var selector = $('.bc_3');
	selector.append(calendar);
	
	
	
	
	
	$(".bc_3 table td").click(function(){
		
		$(".bc_3 table td").removeClass("on");
		$(this).addClass("on");
		
	});
		
	
	
	
	
	
	
	
	
});