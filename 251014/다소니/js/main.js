$(function(){
    //처음 시작할 때부터 글자 슬라이드 적용하기 위해
    setTimeout(function(){
        $('.slider li .text0').addClass('on');
        $('.slider li .atext0').addClass('on');
    });
    let bx = $('.slider').bxSlider({
        auto:true,
        controls:false,
        pager:false,
        mode:'fade',
        pause:5000,
        onSlideBefore:function(){},
        onSlideAfter:function(){
            let k = bx.getCurrentSlide(); // 현재 슬라이드 번호
            $('.slider li').find('h2').removeClass('on');
            $('.slider li').find('p').removeClass('on');
            $('.slider li .text'+k).addClass('on');
            $('.slider li .atext'+k).addClass('on');
        }
    });
});