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
    
    //tab 전환 예시
    $(".class명").click(function(){
     // class명 children에 해당하는 태그 넣어주기
     $(this).children('button').removeClass('active');
     $(this).children('button').addClass('active');
    });
});


