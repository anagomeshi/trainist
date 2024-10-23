const timerBar = document.querySelector('.timer-bar');
const timerTime = document.querySelector('.timer-time');
let maxTime = 60; 
const initialOffset = '301.59';
let i = 1;

const interval = setInterval(() => {
    const offset = i * (initialOffset / maxTime);
    const time = maxTime + 1 - i;
    timerBar.style.strokeDashoffset = offset;
    timerTime.innerText = time;
    if (i == maxTime) {
        clearInterval(interval);
    }else{
        i++;
    }
}, 1000);