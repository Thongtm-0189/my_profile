var in1 = document.getElementsByClassName("in")[0];
var in2 = document.getElementsByClassName("in")[1];
var in3 = document.getElementsByClassName("in")[2];
var in4 = document.getElementsByClassName("in")[3];

var on1 = document.getElementsByClassName("on")[0];
var on2 = document.getElementsByClassName("on")[1];
var on3 = document.getElementsByClassName("on")[2];
var on4 = document.getElementsByClassName("on")[3];

in1.onclick = function(){
    on1.style.display = "block";
    on2.style.display = "none";
    on3.style.display = "none";
    on4.style.display = "none";
}
in2.onclick = function(){
    on2.style.display = "block";
    on1.style.display = "none";
    on3.style.display = "none";
    on4.style.display = "none";
}
in3.onclick = function(){
    on3.style.display = "block";
    on2.style.display = "none";
    on1.style.display = "none";
    on4.style.display = "none";
}
in4.onclick = function(){
    on4.style.display = "block";
    on2.style.display = "none";
    on3.style.display = "none";
    on1.style.display = "none";
}