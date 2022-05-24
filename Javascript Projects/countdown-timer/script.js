const daysEl = document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minutesEl= document.getElementById('minutes');
const secondsEl= document.getElementById('seconds');


const trialDay="9 July 2022";

function countdown(){
    const trialDayDate = new Date(trialDay); 
    const currentDate = new Date();


    const totalSeconds = (trialDayDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds%60);
    if(totalSeconds<0){
        totalSeconds=0;
    }


    daysEl.innerHtml = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time<10 ? (`0${time}`):time;
}

//initial call
countdown();
setInterval(countdown, 1000);

