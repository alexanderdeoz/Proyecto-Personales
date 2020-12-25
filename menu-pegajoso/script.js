$(function(){
    $(window).scroll(function(){
     var wintop=$(window).scrollTop();
     if(wintop>=30){
         $("body").addClass("sticky-header");
     } else{
         $("body").removeClass("sticky-header");
     }  
    })
})