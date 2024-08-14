/*헤더*/
$(document).ready(function(){

    $("#header-top .toggle-btn").on( "click", function() {

        var $targetBody = $(this).parents('#header-top').find('.toggle-body');
        var $targetBodyH = $targetBody.find('.inner').outerHeight();
        var $srEl = $(this).find(".sr-only");
        $(this).toggleClass("active");

        if($(this).hasClass("active") === true) {

            $(this).parents('.toggle-head').addClass( "active" );
            $srEl.text('닫기')
            $targetBody.height($targetBodyH);

            $(window).resize(function() {

                var $targetBodyH = $targetBody.find('.inner').outerHeight();
                $targetBody.height($targetBodyH);

            });

        } else {

            $(this).parents('.toggle-head').removeClass( "active" );
            $srEl.text('열기')
            $targetBody.height(0);

        }
    });
    //GNB 스크롤 이벤트 
    $(window).scroll(function(){
       if($(window).scrollTop() > 30){
        $("#header").addClass("move")
       } else{
        $("#header").removeClass("move")
       }
    });

    //변수 선언
    $gnb_pc = $(".head-gnb .gnb .depth-1"),
    $gnb_inner = $("#header .header-body"),
    $subList = $(".gnb .depth-2");
    
    //PC 메뉴 보이기/숨기기
    $gnb_pc.bind("mouseenter focusin", function(){
        $subList.addClass("on");
        $gnb_inner.addClass("on");
    });

    $gnb_pc.bind("mouseleave focusout", function(){
        $subList.removeClass("on");
        $gnb_inner.removeClass("on");
    });

   
    //PC 사이트맵
    $(".head-util .siteMap-btn, .siteMap-menu .close").click(function(e){
        e.preventDefault();
        $(".siteMap-menu").toggleClass('open');
        $(".siteMap-menu .close").toggleClass('open');
    }); 

    $("#footer .select_btn").click(function(e){
        $(this).toggleClass('on');
    });
});