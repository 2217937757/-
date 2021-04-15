$(document).ready(function(){
    $jiandao = "<img src='img/jiandao.jpg'>"
    $shitou = "<img src='img/shitou.jpg'>"
    $bu = "<img src='img/bu.jpg'>"
    $cxks = ""
    $("#jiandao").click(function(){
        $("#wanjia").html($jiandao+"你的出招")
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("平局"+$cxks)
        }else if($jieguo=="1"){
            $("#span").html("你输了"+$cxks)
        }else{
            $("#span").html("你赢了"+$cxks)
        }
    })
    $("#shitou").click(function(){
        $("#wanjia").html($shitou+"你的出招")
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("你赢了"+$cxks)
        }else if($jieguo=="1"){
            $("#span").html("平局"+$cxks)
        }else{
            $("#span").html("你输了"+$cxks)
        }
    })
    $("#bu").click(function(){
        $("#wanjia").html($bu+"你的出招")
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("你输了"+$cxks)
        }else if($jieguo=="1"){
            $("#span").html("你赢了"+$cxks)
        }else{
            $("#span").html("平局"+$cxks)
        }
    })
    function jieguo(){
        $sum = Math.floor(Math.random()*3)
        if($sum==0){
            $("#diannao").html($jiandao+"电脑出招")
            return 0
        }else if($sum==1){
            $("#diannao").html($shitou+"电脑出招")
            return 1
        }else{
            $("#diannao").html($bu+"电脑出招")
            return 2
        }
    }
    $("#xx").click(function(){
        location.reload()
    })
})