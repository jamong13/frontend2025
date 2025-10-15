$(function(){
    let btn = $('#tab_menu > li');
    let content = $('#tab_content > div');
    
    btn.click(function(){
        var i = $(this).index();
        
        $(btn).removeClass('on');
        $(btn).eq(i).addClass('on');
        $(content).removeClass('on');
        $(content).eq(i).addClass('on');
    });
});