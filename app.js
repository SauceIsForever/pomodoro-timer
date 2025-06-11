const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const progressBar = document.getElementById('progress-bar');
const dropDown = document.getElementById('dropdown');
const startingMinutes = 5;
let time = startingMinutes * 60;
const totalDuration = 60;
let timeLeft = totalDuration;
let timerID;

const countDown = document.getElementById('timer-display');

startButton.addEventListener("click", function() {
    if (timerID){
        return;
    }
   
    timerID = setInterval(function() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        countDown.innerHTML = `${minutes}:${seconds}`;
        time--;
        progressBar.value += 1;

        if (countDown.innerHTML == '0:00'){
            clearInterval(timerID);
        }
    }, 1000);
});

pauseButton.addEventListener("click", function(){
    clearInterval(timerID);
    timerID = null;
});

resetButton.addEventListener("click", function(){
    clearInterval(timerID);
    time = 60;
    countDown.innerHTML = dropDown.value;
    progressBar.value = "0";
    timerID = null;
    console.log("After reset, timerID is:", timerID);
});

dropDown.addEventListener("change", function(){
    console.log("Button was changed");
    if(dropDown.value == "5:00"){
        countDown.innerHTML = "5:00";
        progressBar.max = 300;
        time = 300;
    } else if (dropDown.value == "10:00") {
        countDown.innerHTML = "10:00";
        progressBar.max = 600;
        time = 600;
    } else if (dropDown.value == "15:00") {
        countDown.innerHTML = "15:00";
        progressBar.max = 900;
        time = 900;
    } else if (dropDown.value == "20:00") {
        countDown.innerHTML = "20:00";
        progressBar.max = 1200;
        time = 1200;
    }
});

