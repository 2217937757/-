$(document).ready(function(){
    $jiandao = "<img src='img/jiandao.jpg'>"
    $shitou = "<img src='img/shitou.jpg'>"
    $bu = "<img src='img/bu.jpg'>"
    $("#jiandao").click(function(){
        $("#wanjiaimg").html($jiandao)
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("平局")
        }else if($jieguo=="1"){
            $("#span").html("你输了")
        }else{
            $("#span").html("你赢了")
        }
    })
    $("#shitou").click(function(){
        $("#wanjiaimg").html($shitou)
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("你赢了")
        }else if($jieguo=="1"){
            $("#span").html("平局")
        }else{
            $("#span").html("你输了")
        }
    })
    $("#bu").click(function(){
        $("#wanjiaimg").html($bu)
        $("#anniu").hide()
        jieguo()
        $jieguo = jieguo()
        if($jieguo=="0"){
            $("#span").html("你输了")
        }else if($jieguo=="1"){
            $("#span").html("你赢了")
        }else{
            $("#span").html("平局")
        }
    })
    function jieguo(){
        $sum = Math.floor(Math.random()*3)
        if($sum==0){
            $("#diannaoimg").html($jiandao)
            return 0
        }else if($sum==1){
            $("#diannaoimg").html($shitou)
            return 1
        }else{
            $("#diannaoimg").html($bu)
            return 2
        }
    }
    $("#xx").click(function(){
        location.reload()
    })
})