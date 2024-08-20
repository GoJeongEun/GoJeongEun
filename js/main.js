$(document).ready(function(){
     
     // animate 시작
     AOS.init(); 

    //테마 모드 전환
    $(".mode_toggle > a").on("click", function(){
       if($(this).children("i").hasClass('active') == true){
            $(this).children("i").removeClass('active');
       } else{
            $(this).children("i").addClass('active');
       }
    });
    
});


