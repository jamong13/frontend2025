$(function(){
    $('.m_menu li ul').css('display', 'none');
    // $('.sub').css('display', 'none');
    // $('.sub').hide();

    // $('.sub').eq(0).show();
    //.sub 중 첫번째 것만 보여라

    //$('.m_menu li:nth-child(1) ul').css('display','block');
    //$('.m_menu li:nth-child(1) ul').show();
    //$('.m_menu li:eq(0) ul').show();
    //$('.m_menu li:first ul').show();

    $('.m_menu > li > a').click(function(e){
        e.preventDefault(); //a 링크 금지
        //.m_menu 안의 li 자식 a 태그를 클릭하면
        var status = $(this).next('.sub').css('display');
        // 클릭한 a 태그 다음에 있는 요소 중 클래스가 sub인 요소의 display 속성값을 가져와서
        // status에 저장
        // none이면 현재 sub가 닫혀 있는 상태 block이면 현재 sub가 열려 있는 상태
        // alert(status);
        if(status === 'none'){
            $('.sub').slideUp();
            $(this).next('.sub').slideDown();
        }else{
            $(this).next('.sub').slideUp();
        }
        //return false; //a 링크 금지
    });
});