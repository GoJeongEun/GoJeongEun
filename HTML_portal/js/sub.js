$(document).ready(function() {

    st_list(); // 통계목록
});

/*통계목록*/
function st_list(){

    /*1뎁스*/
    $('.st_list > li > button').click(function(){

    var $st_par = $(this).parent();

    if(($st_par).hasClass("on") == true){
        $st_par.removeClass('on');
    } else {
        $st_par.addClass('on');
    }
});

    /*2뎁스부터*/
$('.st_list li > button[class^="depth_"]').click(function(){

        var $st_par = $(this).parent();

        if(($st_par).hasClass("on") == true){
            $st_par.removeClass('on');
        } else {
            $st_par.addClass('on');
        }
    });

    $('.st_list li > span').click(function(){

    var $st_par = $(this).parent();

    if(($st_par).hasClass("on") == true){
        $st_par.removeClass('on');
    } else {
        $st_par.addClass('on');
    }
    });

    /*통계목록팝업 열기*/
    $('.popup_btn').click(function(){

        $('.st_list_popup_wrap').fadeIn();

    });

    /*통계목록팝업 닫기*/
    $('.st_list_popup_wrap .close').click(function(){

        $('.st_list_popup_wrap').fadeOut();

    });

}

$(document).ready(function(){		
    $('.pub_board_list .pub_board_item').on('mouseenter focusin', function(){
        $(this).children('div').addClass('active')
    });
    $('.pub_board_list .pub_board_item').on('mouseleave focusout',function(){
        $(this).children('div').removeClass('active')
    });			
});

/*통계용어*/
$(document).ready(function(){		

    $('.term-top .categories .btn-cat').click(function(){

        var $btn_cat = $(this);

        $('.term-top .categories .btn-cat').removeClass('on');
        $btn_cat.addClass('on');
    });

});

