const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const progressBar = document.getElementById('progress-bar');
const startingMinutes = 1;
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
    countDown.innerHTML = "1:00"
    progressBar.value = "0";
    timerID = null;
    console.log("After reset, timerID is:", timerID);
});

