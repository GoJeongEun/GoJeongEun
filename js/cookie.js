$(function(){

   // 쿠키 값 확인 show, hide 처리
     cookiedata = document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0){
        querySelectorAll["layer_popup"].style.visibility = "visible"; 
    }
    else{
        querySelectorAll["layer_popup"].style.visibility = "hidden"; 
    }
});

// 쿠키 데이터 설정 
function setCookie(name, value, expiredays) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function closePop(){
    if(document.todayChk.checked){
        setcookie("maindiv", "done" , 1);
    }
    querySelectorAll["layer_pop"].style.visibility = "hidden";
}
