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

 // a태그 id href 클릭시 smooth scrolling
 // css 속성 scroll-behavior: smooth; 이 적용되지 않을 경우 아래의 script를 사용하여 같은 효과를 준다(크로스브라우저)

$(document).ready(function(){
     // Add smooth scrolling to all links
     $("a").on('click', function(event) {
   
       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
   
         // Store hash
         var hash = this.hash;
   
         // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 800, function(){
      
           // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
         });
       } // End if
     });
});


