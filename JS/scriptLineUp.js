// Establecer la fecha aqui, en formato ingles
var countDownDate = new Date("Nov 25, 2022 19:55:00").getTime();


var x = setInterval(function() {
  
  var now = new Date().getTime();
 
  var distance = countDownDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 
  document.getElementById("days").innerHTML =  days;
  document.getElementById("hours").innerHTML =  hours;
  document.getElementById("minutes").innerHTML =  minutes;
  document.getElementById("seconds").innerHTML =  seconds;
   
  // el conteo regresivo anime los circulos
  effectCircle(days, hours, minutes, seconds);
}, 1000);
effectCircle = function(d, h, m, s){
    // valores maximos
    const max_sec = 60;
    const max_min = 60;
    const max_hour = 24;
    const max_day = 30;
   
    const strokeDashoffset = 439; 
    var circleSVG = document.getElementsByClassName('outer');
    // circulo dias
    var valPerDay = strokeDashoffset / max_day; 
    var size = strokeDashoffset - (valPerDay * d); 
    circleSVG[0].style.strokeDashoffset = size; 
    // circulo horas
    var valPerHour = strokeDashoffset / max_hour;
    var size = strokeDashoffset - (valPerHour * h);
    circleSVG[1].style.strokeDashoffset = size;
    // circulo minutos
    var valPerMin = strokeDashoffset / max_min;
    var size = strokeDashoffset - (valPerMin * m);
    circleSVG[2].style.strokeDashoffset = size;
    // circulo segundos
    var valPerSecond = strokeDashoffset / max_sec;
    var size = strokeDashoffset - (valPerSecond * s);
    circleSVG[3].style.strokeDashoffset = size;
}