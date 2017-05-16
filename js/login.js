

$(function(){
    if($(".userBox input").val()!=""){
        $(".userBox span").css("display","block");
    }
    $(".userBox input").keyup(function(){
        if($(".userBox input").val()!=""){
            $(".userBox span").css("display","block");
        }else {
            $(".userBox span").css("display","none");
        }
    });


    $(".userBox span").click(function(){
        $(".userBox input").val("");
        $(".userBox span").css("display","none");
        if($("#user").val()===""||$("#password").val()===""){
            $(".loginBtn").removeClass("find")
        }
    });

   $("input").keyup(function(){
        if($("#phone-code").val()!=""&& $.trim($("#yanzheng").val())!=""&&$("#user").val()!=""){
            $(".loginBtn").addClass("find")
        }else{
            $(".loginBtn").removeClass("find")
        }
    });

    $(".loginBtn").on("click",function(){
        if($("#user").val()===""){
            $(".error").fadeIn().delay(1000).fadeOut();
            $(".error").text("手机号不能为空")
        }else if($("#user").val()!=""&& $.trim($("#yanzheng").val())===""){
            $(".error").fadeIn().delay(1000).fadeOut();
            $(".error").text("验证码不能为空")
        }else if($("#user").val()!=""&&$("#yanzheng").val()!=""&&$("#phone-code").val()===""){
            $(".error").fadeIn().delay(1000).fadeOut();
            $(".error").text("请输入手机验证码")
        }
    })
    $("input").blur(function(){
        if($("#user").val()!=""&& $.trim($("#yanzheng").val())!=""&&$("#phone-code").val()!=""){
            $(".error").hide();
        }else {
            $(".error").hide();
        }
    })


})


