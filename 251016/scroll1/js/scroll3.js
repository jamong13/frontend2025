$(function(){
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        $('.s_Top').text(sct);
        if(sct>=450 && sct <= 1000){
            $('.left1').addClass('on');
        }else{
            $('.left1').removeClass('on');
        }


        if(sct >= 1000 && sct <= 1800){
            $('.right1').addClass('on');
        } else {
            $('.right1').removeClass('on');
        }
        if(sct >=2500){
             $('.s4_1').addClass('active');
            setTimeout(function(){
                  $('.s4_2').addClass('active');
            },400);
              setTimeout(function(){
                  $('.s4_3').addClass('active');
            },800);
              setTimeout(function(){
                  $('.s4_4').addClass('active');
            },1200);
           

        }


    });

});