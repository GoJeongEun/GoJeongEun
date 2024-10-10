$(document).ready(function(){

   // 쿠키 설정
     cookiedata = document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0){
        querySelectorAll["layer_popup"].style.visibility = "visible"; 
    }
    else{
        querySelectorAll["layer_popup"].style.visibility = "hidden"; 
    }
});

function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"

}

