/* ** 윈도우 사이즈 체크 (반응형) ** */
let winSize;
function winSizeSet() {
	const brekpoint = 1024;
	if (window.innerWidth >= brekpoint) {
		winSize = 'pc';
	}
	else {
		winSize = 'mob';
	}
}

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

    //헤더 스크롤 이벤트
    $(window).scroll(function(){
        if($(window).scrollTop() > 30){
         $("#header").addClass('move')
        } else{
         $("#header").removeClass('move')
        }
     });

     //윈도우 창 크기에 따라 클래스 추가
    $(window).on('resize', function(){
        var width_s = window.innerWidth;
        if (width_s <= 1024) {
            $(".siteMap-menu").removeClass('pc');
        } else {
            $(".siteMap-menu").addClass('pc');
        }
    });

    // 위로가기 활성화
    $(window).on('scroll load', function () {
        if ($('html, body').scrollTop() > 200) {
            $('#footer .scroll_top').addClass('active');
        }
        else {
            $('#footer .scroll_top').removeClass('active');
        }
    });

    // 위로가기
    $('#footer .scroll_top a').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top });

        $(this.hash).focus();

        return false;
    });

    //변수 선언
    $gnb_pc = $(".head-gnb .gnb .depth-1"),
    $gnb_inner = $("#header .header-body"),
    $subList = $(".gnb .depth-2");
    
    //PC 메뉴 보이기/숨기기
    $gnb_pc.bind("mouseenter focusin", function(){
        $subList.addClass('on');
        $gnb_inner.addClass('on');
    });

    $gnb_pc.bind("mouseleave focusout", function(){
        $subList.removeClass('on');
        $gnb_inner.removeClass('on');
    });

    // 모바일 메뉴 열기
    $(".head-util .siteMap-btn").click(function(e){
        e.preventDefault(); //a링크로 이동 X
        $(".siteMap-menu .gnb").addClass('open');
        $(".siteMap-menu .mo_background").addClass('open');
        $(".siteMap-menu .mo-top .close").addClass('open');
        $(".siteMap-menu .mo-top").addClass('open');
    });    
    $(".siteMap-menu .close").click(function(){
        if($(".siteMap-menu .gnb").hasClass('open') == true){
            $(".siteMap-menu .gnb").removeClass('open');
            $(".siteMap-menu .mo_background").removeClass('open');
            $(".siteMap-menu .mo-top").removeClass('open');
        }else {
            $(this).addClass('open');
            $(this).parents(".siteMap-menu .gnb").addClass('open');
            $(this).parents(".siteMap-menu .close").addClass('open');
        }
    });
    // 모바일 메뉴 서브 메뉴 
    $(".siteMap-menu .depth-1").click(function(){
        if ($(this).hasClass('on') == true) {
			$(this).removeClass('on');
			$(this).children(".depth-1 > div").removeClass('on');
		} else {
			$(this).addClass('on');
			$(this).children(".depth-1 > div").addClass('on');
		}
    });
    //PC 사이트맵
    $(".head-util .siteMap-btn, .siteMap-menu .close").click(function(e){
        e.preventDefault();
        $(".siteMap-menu").toggleClass('open');
        $(".siteMap-menu .close").toggleClass('open');
    }); 

    
    //서브 헤드 검색 영역 
    $(".head-util .search-btn").click(function(e){
        e.preventDefault();
        if($(this).hasClass('on') == true){
            $(this).removeClass('on');
            $(".head-search-area").removeClass('on').slideUp(500)
            $(".siteMap-menu .gnb").removeClass('open');
            $(".siteMap-menu").removeClass('open');
        }else {
            $(this).addClass('on');
            $(".head-search-area").addClass('on').slideDown(1000);
            $(".siteMap-menu .gnb").removeClass('open');
            $(".siteMap-menu").removeClass('open');
        }
    }); 
});