var date = new Date();
var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
document.getElementById("p1").innerHTML = current_date;

var date = new Date();
var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
document.getElementById("p2").innerHTML = current_time;