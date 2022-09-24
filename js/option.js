var in1 = document.getElementsByClassName("in")[0];
var in2 = document.getElementsByClassName("in")[1];
var in3 = document.getElementsByClassName("in")[2];
var in4 = document.getElementsByClassName("in")[3];
var in5 = document.getElementsByClassName("in")[4];

var on1 = document.getElementsByClassName("on")[0];
var on2 = document.getElementsByClassName("on")[1];
var on3 = document.getElementsByClassName("on")[2];
var on4 = document.getElementsByClassName("on")[3];
var on5 = document.getElementsByClassName("on")[4];

var listin = [in1, in2, in3, in4, in5];
var liston = [on1, on2, on3, on4, on5];

listin.forEach(element => {
    element.onclick = function  (e) {
        liston[listin.indexOf(element)].style.display = "block";
        for (let index = 0; index < listin.length; index++) {
            if(index != listin.indexOf(element)){
                liston[index].style.display = "none";
            }
            
        }
    }
});

(function(){
    var width = $(window).width();
    var screen = "";
    if(width <=1000){
        screen = "small";  
    } else if(width>800) { screen = "big"; }
    
    $(window).resize(function(){
        var cur_width = $(window).width();
        if(screen == "big"){
            location.reload(); 
        }else if(screen == "small"){
            location.reload();
        }
        }) 
});