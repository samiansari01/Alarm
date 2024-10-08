// Digital Alarm with date and date
setInterval(function(){
let date = new Date();
let year = date.getFullYear();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = months[date.getMonth()];
let day = date.getDate();
let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let days = dayName[date.getDay()];


let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let intervalCard = hour < 12 ? 'AM' : 'PM';

// Zero if the count is less than 10
//let hourZero = hour < 10 ? '0' : '';
//let minuteZero = minute < 10 ? '0' : '';
//let secondsZero = seconds < 10 ? '0' : '';

//console.log(hour, minute, seconds);

// Convert railway clock to AM/PM clock
hour = (hour>12) ? hour - 12 : hour;
hour = (hour==0) ?  12 : hour;


let todayDate = document.getElementById('todayDate');
todayDate.innerHTML = `Today is : -  ${days} <br> Date is : - ${day} ${month}, ${year}`;

let hourCard = document.getElementById('hourCard');
hourCard.innerHTML = (hour < 10 ? '0' : '')+hour;

let minuteCard = document.getElementById('minuteCard');
minuteCard.innerHTML = (minute < 10 ? '0' : '')+minute;

let secondsCard = document.getElementById('secondsCard');
secondsCard.innerHTML = (seconds < 10 ? '0' : '')+seconds;

let daytimeCard = document.getElementById('daytimeCard');
daytimeCard.innerHTML = intervalCard;

}, 1000);




// Alarm Clock with Date and time picker
const alarmSubmit = document.getElementById("alarmSubmit");
// Add an event listener to the submit button
alarmSubmit.addEventListener("click", setAlarm);

var audio = new Audio(
"https://cdn.freesound.org/previews/219/219244_4082826-lq.mp3"
);

// function to play the alarm ring tone
function ringBell() {
audio.play();
}
// Stop the alarm
function stopAlarm(){
ringBell = function () {};
}

// This function will run whenever alarm is set from the UI
let timeToAlarm;
let alarmDate;
let alarmInput;

let timeRemains = document.getElementById("timeRemains");
let alarmHelp = document.getElementById("alarmHelp");
let alarmError = document.getElementById("alarmError");
let alarmStop = document.getElementById("alarmStop");
alarmStop.style.display = "none";
function setAlarm(e) {
e.preventDefault();
alarmInput = document.getElementById("alarmClock").value;
timeRemains.style.display = "none";
alarmHelp.style.display = "none";

alarmDate = new Date(alarmClock.value);
alarmHelp.innerHTML = `Setting Alarm for ${alarmDate}...`;
now = new Date();
timeToAlarm = alarmDate - now;
if(timeToAlarm>=0){
alarmStop.style.display = "inline-block";
  setTimeout(() => {
      ringBell();
  }, timeToAlarm);
}else{
alarmError.innerHTML = "Please select date and time!";
}



}
// This  will show the countdown timer till the alarm ringBell
function countdownTimeStart() {
// Update the count down every 1 second
var x = setInterval(function () {
// Get todays date and time
var nowDateTime = new Date().getTime();
// Find the distance between now an the count down date
var distance = alarmDate - nowDateTime;
// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((distance % (1000 * 60)) / 1000);

if (h === 0 && m === 0) {
  timeRemains.innerHTML = `Remaining Time is: ${s} Seconds`;
} else if (h === 0) {
  timeRemains.innerHTML = `Remaining Time is: ${m} Minutes ${s} Seconds`;
} else if (days === 0){
  timeRemains.innerHTML = `Remaining Time is: ${h} Hours ${m} Minutes ${s} Seconds`;
}else {
  timeRemains.innerHTML = `Remaining Time is: ${days} Days ${h} Hours ${m} Minutes ${s} Seconds`;
}
// If the count down is over, write some text
if(alarmInput == ""){
  timeRemains.style.display = "none";
  alarmHelp.style.display = "none";
  alarmError.innerHTML = "Please select date and time!";
}
else if (distance < 0) {
  clearInterval(x);
  timeRemains.style.display = "none";
  alarmHelp.style.display = "none";
  //hiding the Stop Alarm button after 9 sec
  setTimeout(function (){
  alarmError.innerHTML = "Alarm Expired! Please set it again.";
    alarmStop.style.display = "none";
  }, 9000);
  
}
else if(timeToAlarm <= 0){
  timeRemains.style.display = "none";
  alarmHelp.style.display = "none";
  alarmError.innerHTML = "Alarm Expired! Please set it again.";
}else{
  timeRemains.style.display = "block";
  alarmHelp.style.display = "block";
}

}, 1000);
}