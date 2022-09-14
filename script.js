console.log("Connected");

function displayTime(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minute = dateTime.getMinutes();
    var second = dateTime.getSeconds();
    var session = document.getElementById("sessions");

    document.getElementById("hour").innerHTML = hours;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = second;

    if(hours >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }
}

setInterval(displayTime, 1000)

var swStart = document.getElementById("sw-start");

swStart.addEventListener("click", () => {
    console.log("swStart pressed!");
    
})
// setInterval(incrementMiliSecond, 10);

function incrementMiliSecond() {
    var mili = 0;
    mili = mili + 1; 
    var milisec = document.getElementById("sw-milisec");
    milisec.innerText = mili;
    if(milisec.innerText == 100) {
        var swSec = document.getElementById();
    }
}