function printTime() {
var d = new Date ();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var milli = d.getMilliseconds();
document.getElementById('timedisplay').innerHTML=hours+":"+mins+":"+secs+"+milli; }
setInterval(printTime,150);
