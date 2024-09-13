$(document).ready(function () {
    
    $('.tab_btn').click(function(){
        $('.tab_btn').removeClass('active')
        $(this).addClass('active')
        
        $('.tab_list').css("display", "none")
        $("." + $(this).attr("id")).css("display", "");
      });

});