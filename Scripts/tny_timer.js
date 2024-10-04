"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Review Assignment

   Event Timer
   Author: Christian Bollinger
   Date:   10/03/24

*/
showClock();
setInterval("showClock()", 1000);
function showClock() {
var thisDay = new Date();
var localDate = thisDay.toLocaleDateString();
var localTime = thisDay.toLocaleTimeString();
document.getElementById("currentTime").innerHTML=
"<span>" + localDate + "</span><span>" + localTime + "</span>";


var j4Date = nextJuly4(thisDay);
j4Date.setHours(21);
var days = (j4Date-thisDay) / (1000*60*60*24);
var hours = (days-Math.floor(days)) * 24;
var minutes = (hours-Math.floor(hours)) * 60;
var seconds = (minutes-Math.floor(minutes)) * 60;
document.getElementById("dLeft").textContent=Math.floor(days);
document.getElementById("hLeft").textContent=Math.floor(hours);
document.getElementById("mLeft").textContent=Math.floor(minutes);
document.getElementById("sLeft").textContent=Math.floor(seconds);
}
function nextJuly4(currentDate) {
   var cYear = currentDate.getFullYear();
   var jDate = new Date("July 4, 2018");
   jDate.setFullYear(cYear);
   if ((jDate - currentDate) < 0) jDate.setFullYear(cYear + 1);
   return jDate;
  
}



