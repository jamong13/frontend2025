$(function(){ // $(document).ready(function(){ });
    var visual = $('#brandVisual > ul > li'); //큰사진 li 
    var button = $('#buttonList > li'); // 버튼 li 
    var current = 0;
    var setIntervalId;
    
    button.on({
        click:function(){
            var tg = $(this);  //현재 클릭버튼 tg
            var i = tg.index(); // tg 인덱스번호 i

            button.removeClass('on');
            tg.addClass('on');

            move(i);  // move 함수 콜한다 i 매개변수
        }
    });
    
    $('#wrap').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    });
    
    timer();//무조건 맨처음 한 번 함수를 콜한다.
    function timer(){
        setIntervalId = setInterval(function(){
            var n = current + 1;
            if(n == visual.size()){
                n = 0;
            }
            
            button.eq(n).trigger('click'); //버튼강제클릭
        }, 5000);
    }
    //setInterval(function(){ 실행될내용 }, 5000-시간);
    function move(i){
        if(current == i) return;
        
        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);
        
        currentEl.css({left:0}).stop().animate({left:'-100%'});
        nextEl.css({left:'100%'}).stop().animate({left:0});

        current = i;
    }
});