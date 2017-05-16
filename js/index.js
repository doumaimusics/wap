$(function(){
    $(".menu").on("click",function(){
        $(".hidden").toggleClass("show");
    })

    $(window).scroll(function(){
        var sc=$(window).scrollTop();
        if(sc>150){
            $("#goTop").css("display","block");
        }else{
            $("#goTop").css("display","none");
        }
    });
    $("#goTop").click(function(){
        $('body,html').animate({scrollTop:0},300);
    });

    FastClick.attach(document.body);


})