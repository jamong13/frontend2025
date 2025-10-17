$(function(){

    //var f_top = 250;
    var f_left = $('#float_div').offset().left;
   // alert(f_top); 250

    $(window).scroll(function(){
        let sct = $(this).scrollLeft();
        $('#float_div').stop().animate({left:f_left+sct},300);
        // $('#float_div').stop().animate({left:f_left+sct},300);

        $('.container > article').each(function(i){
            if(sct >= $('.container > article').eq(i).offset().left){
                $('nav ul li').removeClass('on');
                $('nav ul li').eq(i).addClass('on');
                $('#float_div ul li').removeClass('on');
                $('#float_div ul li').eq(i).addClass('on');
            }
        });


        if(sct >=300){
            $('nav').addClass('fixed');
        }else{
            $('nav').removeClass('fixed');
        }
    });


    $('nav ul li').click(function(){
         var i = $(this).index(); //li 인덱스 번호
         var offset_t = $('.container > article').eq(i).offset().left;
        
        $('html,body').stop().animate({scrollLeft:offset_t},1000);
        // $('nav ul li').removeClass('on');
        //  $('nav ul li').eq(i).addClass('on');
        return false;
    });

    $('#float_div ul li').click(function(){
         var i = $(this).index(); //li 인덱스 번호
         var offset_t = $('.container > article').eq(i).offset().left;
        
        $('html,body').stop().animate({scrollLeft:offset_t},1000);
         

        return false;
    });

    $('.container > article').mousewheel(function(event, d){
        console.log(d);
        event.preventDefault();

        if(d>0){ //휠 위로 동작 감지(+)
            var preVal = $(this).prev().offset().left;
            $('html, body').stop().animate({scrollLeft:preVal}, 1000, 'easeOutBounce');
        }
        if(d<0){ //휠 아래로 동작 감지(-1)
            var nextVal = $(this).next().offset().left;
            $('html, body').stop().animate({scrollLeft:nextVal}, 1000, 'easeOutBounce');
        }
    });

    // 크롬에서 jquery.easing.1.3.js 검색 easing 효과


    
});