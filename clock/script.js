const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
function runTheClock(){
var date = new Date();
console.log(date);
let hr=date.getHours();
let min=date.getMinutes();
let sec=date.getSeconds();

let hrPosition=(hr*360/12)+(min*(360/60)/12);
let minPosition=(min*6)+(sec*(360/60)/60);
let secPosition=sec*6;
//BUG: if the hands cross 0 i.e 12 it is weird
HOURHAND.style.transform="rotate(" + hrPosition + "deg)"
MINUTEHAND.style.transform="rotate(" + minPosition + "deg)"
SECONDHAND.style.transform="rotate(" + secPosition + "deg)"
}

var interval =setInterval(runTheClock,1000);