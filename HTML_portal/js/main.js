$(document).ready(function () {

    popup_slider(); //팝업존

    
    function popup_slider() {

        $('#popupSlider').on('init', function(event, slick) {
            $(this).append('<div class="slick-counter fontSC3"><span class="title fontSC5">팝업</span>존<span class="current"></span><span class="bar"></span><span class="total"></span></div>');
            $('#popupSlider .current').text(slick.currentSlide + 1);
            $('#popupSlider .total').text(slick.slideCount);
        });

        $('#popupSlider').slick({
            slide         : 'div',		//슬라이드 되어야 할 태그 ex) div, li
            infinite      : true, 	//무한 반복 옵션
            slidesToShow  : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed         : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows        : true, 		// 옆으로 이동하는 화살표 표시 여부
            dots          : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay      : true,			// 자동 스크롤 사용 여부
            autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
            vertical      : false,		// 세로 방향 슬라이드 옵션
            //dotsClass     : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
            draggable     : true, 	//드래그 가능 여부
            //appendDots    : $('.target_dots'),

            // 지정한 클래스에 맞게 값을 지정한다.
            prevArrow: $('.popup-box .prevArrow'),
            nextArrow: $('.popup-box .nextArrow'),
            draggable : true
            }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('#popupSlider .current').text(nextSlide + 1);
        });
        
        $('.popup-slider-btn .sliderPause').click(function() {
            $('#popupSlider').slick('slickPause');
            $(this).removeClass('on');
            $('.popup-slider-btn .sliderPlay').addClass('on');
        });

        $('.popup-slider-btn .sliderPlay').click(function() {
            $('#popupSlider').slick('slickPlay');
            $(this).removeClass('on');
            $('.popup-slider-btn .sliderPause').addClass('on');
        });
    }

    /*수송실적+항만 그래프*/
    $('.mainCnt_1-in > li').click(function() {

        $('.mainCnt_1-in > li').removeClass('on');
        $(this).addClass('on');
    
    });

    /* 위로 이동 방지 */
    $(".chart-text").click(function(e){
        e.preventDefault();
    });

    /*공지사항 탭*/
    $('.tabList-box > .tabList > li').click(function() {

        $('.tabList-box > .tabList > li').removeClass('on');
        $(this).addClass('on');
    
    });

    /*배너슬라이드*/
    $('#bannerListSlider').slick({
        slide         : 'div',		//슬라이드 되어야 할 태그 ex) div, li
        infinite      : true, 	//무한 반복 옵션
        slidesToShow  : 6,		// 한 화면에 보여질 컨텐츠 개수
        //centerMode: true,       //중앙에 슬라이드가 보여지는 모드
        //centerPadding: '70px',      //중앙에 슬라이드가 보여지는 모드에서 패딩 값
        variableWidth: true,        //사진마다 width의 크기가 다른가?(true or false) 
        slidesToScroll: 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed         : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows        : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots          : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay      : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        vertical      : false,		// 세로 방향 슬라이드 옵션
        //dotsClass     : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        draggable     : true, 	//드래그 가능 여부
        //appendDots    : $('.target_dots'),

        // 지정한 클래스에 맞게 값을 지정한다.
        prevArrow: $('.bannerListSlider-btn .prevArrow'),
        nextArrow: $('.bannerListSlider-btn .nextArrow')
    });

    $('.bannerListSlider-btn .sliderPause').click(function() {
        $('#bannerListSlider').slick('slickPause');
        $(this).removeClass('on');
        $('.bannerListSlider-btn .sliderPlay').addClass('on');
    });

    $('.bannerListSlider-btn .sliderPlay').click(function() {
        $('#bannerListSlider').slick('slickPlay');
        $(this).removeClass('on');
        $('.bannerListSlider-btn .sliderPause').addClass('on');
    });

    /*팝업 닫기*/
    $('.st_list_popup_wrap .close, .st_list_popup_wrap .pop_close ').click(function(){

        $('.st_list_popup_wrap').fadeOut();

    });
    
});