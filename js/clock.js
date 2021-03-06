// NOTE: ES5 chosen instead of ES6 for compatibility with older mobile devices
var now, dd, td;
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

document.addEventListener("DOMContentLoaded", init, false);
function init() {
  // dd = document.getElementById("date");
  td = document.getElementById("time");
  updateTime();
  setInterval(updateTime,30000);
}

function updateTime() {
  var timeFormat = window.location.hash;

  var clockdata = getClockStrings(timeFormat);
  // dd.innerHTML = clockdata.datehtml;
  td.innerHTML = clockdata.timehtml;
  // dd.dateTime = now.toISOString();
  td.dateTime = now.toISOString();
}

function getClockStrings(timeFormat) {
  now = new Date();
  var year = now.getFullYear();
  var month = months[now.getMonth()];
  var date = now.getDate();
  var day = days[now.getDay()];
  var hour = now.getHours();
  var minutes = now.getMinutes();
//   var seconds = now.getSeconds();
//   var meridian = hour < 12 ? "AM" : "PM";
//   var clockhour = hour > 12 ? hour - 12 : hour;
//   if (hour === 0) {clockhour = 12;}
  var clockhour = hour < 10 ? "0" + hour : hour;
  var clockminutes = minutes < 10 ? "0" + minutes : minutes;
//   var clockseconds = seconds < 10 ? "0" + seconds : seconds;
  var datehtml = day + ", " + month + " " + date + ", " + year;
  if(timeFormat=="#hhmm"){
    var timehtml = clockhour + " " + clockminutes;
  } else if(timeFormat=="#hh"){
    var timehtml = clockhour;
  } else if(timeFormat=="#mm"){
    var timehtml = clockminutes;
  } else {
    var timehtml = clockhour + " " + clockminutes;
  }
  
  return {"datehtml":datehtml,"timehtml":timehtml};
}