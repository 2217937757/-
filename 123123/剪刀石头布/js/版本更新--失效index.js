
    var cxks = "<br><input type='button' value='重新开始' onclick='suaxin()'>"
    function jiandao(){
        document.getElementById("wanjia").innerHTML = "<img src='img/jiandao.jpg'>你的出招"
        var jieguo = diannaochuzhao()
        yincang()
        if(jieguo=="jiandao"){
            document.getElementById("jieguo").innerHTML = "平局"+cxks
        }else if(jieguo=="shitou"){
            document.getElementById("jieguo").innerHTML = "你输了"+cxks
        }else{
            document.getElementById("jieguo").innerHTML = "你赢了"+cxks
        }
    }
    function shitou(){
        document.getElementById("wanjia").innerHTML = "<img src='img/shitou.jpg'>你的出招"
        var jieguo = diannaochuzhao()
        yincang()
        if(jieguo=="jiandao"){
            document.getElementById("jieguo").innerHTML = "你赢了"+cxks
        }else if(jieguo=="shitou"){
            document.getElementById("jieguo").innerHTML = "平局"+cxks
        }else{
            document.getElementById("jieguo").innerHTML = "你输了"+cxks
        }
    }
    function bu(){
        document.getElementById("wanjia").innerHTML = "<img src='img/bu.jpg'>你的出招"
        var jieguo = diannaochuzhao()
        yincang()
        if(jieguo=="jiandao"){
            document.getElementById("jieguo").innerHTML = "你输了"+cxks
        }else if(jieguo=="shitou"){
            document.getElementById("jieguo").innerHTML = "你赢了"+cxks
        }else{
            document.getElementById("jieguo").innerHTML = "平局"+cxks
        }
    }

    function diannaochuzhao(){
        var sum = 3*Math.random()
        if(sum<1){
            document.getElementById("diannao").innerHTML = "<img src='img/jiandao.jpg'>电脑出招"
            return "jiandao"
        }else if(sum<2){
            document.getElementById("diannao").innerHTML = "<img src='img/shitou.jpg'>电脑出招"
            return "shitou"
        }else{
            document.getElementById("diannao").innerHTML = "<img src='img/bu.jpg'>电脑出招"
            return "bu"
        }
    }
    
    function suaxin(){
        location.reload()
    }

    function yincang(){
        document.getElementById("anniu").style.display="none"
    }