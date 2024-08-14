$(document).ready(function(){

     /* 서브 location */
     $(".sub_dep1Link").click(function(e){
        e.preventDefault();
        if($(this).parents('.sub_dep1List').hasClass("on") == true){
            $(this).parents('.sub_dep1List').removeClass('on');
            $(this).next().slideUp();
        }else {
            $(this).parents('.sub_dep1List').addClass('on');
            $(this).next().slideDown();
  
        }
    }); 

    $('.top_btn_tabList .btn_tab_dep2Item .dep2Item_btn').click(function(){
      $(this).parent().parent().children('.btn_tab_dep2Item').removeClass("active");
      $(this).parent().addClass("active");
    });

    /*통계정보팝업 열기*/
    $('.popup_btn').click(function(){

        $('.st_list_popup_wrap').fadeIn();
    
      });
    
      /*통계정보팝업 닫기*/
      $('.st_list_popup_wrap .close').click(function(){
        $('.st_list_popup_wrap').fadeOut();
      });


      //faq 탭 리스트 전환 
      $('.tab_dep1_btn').click(function(){
        $('.tab_dep1_btn').removeClass('active')
        $(this).addClass('active')
        
        $('.faq_list').css("display", "none")
        $("." + $(this).attr("id")).css("display", "");
      });
      //faq 리스트 펼침 / 닫힘
      faq_list(); 

      function faq_list() {

        var $faq_list = $('.faqList');
        var $faq_btn = $('.faqList > li > .titBtn');
      
        $faq_btn.click(function() {
      
          if($(this).parent('li').hasClass('on') === true ) {
            $(this).parent('li').removeClass('on');
            $(this).next('.txtBox').slideUp();
          } else {
            $(this).parent('li').addClass('on');
            $(this).next('.txtBox').slideDown();
          }
      
        });
      
      };    
}); 

