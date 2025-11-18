$(function() {
	
	var canv = $( '#canvas1' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#f44336";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 86 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.86) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#f44336";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle = "#f44336";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});











///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas2' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#da1c72";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 96 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.96) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#da1c72";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#da1c72";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas3' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#ff9800";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 89 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.89) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#ff9800";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#ff9800";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas4' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#4caf50";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 96 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.96) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#4caf50";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#4caf50";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas5' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#3f51b5";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 85 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.85) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#3f51b5";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#3f51b5";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas6' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#2c3e50";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 91 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.91) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#2c3e50";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#2c3e50";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////

$(function() {
	
	var canv = $( 'div.skill_box ul li > #canvas7' )[0].getContext('2d');
	
	//테두리 원
	
	canv.lineWidth = "2";		//선의 굵기

	canv.strokeStyle = "#673ab7";
	canv.beginPath();
	canv.arc( 110, 110, 90, 0, Math.PI * 2, false );
	canv.stroke();
	
	
	//각도
	var deg1 = 0;
	
	//퍼센트
	var per1 = 0;
	
	//스킬레벨
	var skill1 = 0;
	
	var timeline = setInterval( canvas_ani, 1000 / 60 );
	
	function canvas_ani() {
		
		//현재값 += 속도 * ( 도착값 - 현재값 );
		
		//스킬레벨
		skill1 += 0.04 * ( 56 - skill1 );
		
		//퍼센트
		per1 = Math.floor( skill1 );
		
		//각도값
		deg1 += 0.04 * ( (2*0.56) - deg1 );
		
		canv.clearRect( 0, 0, 500, 400 );		//캔버스 지움
		
		//다시 그려줄 바깥 원
		canv.lineWidth = "4";	//선의 굵기

		canv.strokeStyle = "#673ab7";
		canv.beginPath();
		canv.arc( 80, 80, 70, 0, Math.PI * 2, false );
		canv.stroke();
		
		
		//canv.lineCap = "round"
		canv.lineWidth= "16";		//선굵기
		
		canv.strokeStyle="#673ab7";
	 	canv.beginPath();
		canv.arc( 80, 80, 50, Math.PI * deg1 - 1.5, Math.PI * 1.5, true );
		canv.stroke();
		
		
		//퍼센트 출력
		canv.font = "35px Impact";
		
		canv.fillStyle = "#555";
		//canv.fillStyle = "#2EBCE8";
		canv.fillText( per1 + '%', 50, 95 );

		
	}
	
});












///////////////////////////////////////////////////////////////////////////////////////////////











