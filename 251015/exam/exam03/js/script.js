$(function(){
    $('dd').hide();
    $('dl dt').click(function(){
        if($(this).next('dd').css('display') === 'none'){
            $('dd').slideUp('slow');
            $(this).next('dd').slideDown('slow');
            $('dt').removeClass('active');
            $(this).addClass('active');
        }else{
            $('dd').slideUp('slow');
            $('dt').removeClass('active');
        }
    });

    $('dt').mouseover(function(){
        $(this).addClass('over');
    });
    $('dt').mouseout(function(){
        $(this).removeClass('over');
    });
});