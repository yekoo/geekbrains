
import {DateTime} from 'https://moment.github.io/luxon/es6/luxon.js';

const timerTimeInp = document.querySelector("#timer-time");

const timerStartStop = document.querySelector("#timer-start");
timerStartStop.addEventListener("click", startTimer);

let dateTimer;
let ticking;

console.log("timer loaded");
//export 
function startTimer(e){
    timerTimeInp.setAttribute("readonly", "");
    const digits = timerTimeInp.value.split(":");

    dateTimer = new Date(1970,0,0);
    
    dateTimer.setHours(digits[0]);
    dateTimer.setMinutes(digits[1]);
    dateTimer.setSeconds(digits[2]);
    
    ticking = setInterval(timerTicking,1000);
}
function timerTicking(e){
    dateTimer.setSeconds( dateTimer.getSeconds() - 1 );
    renderTimer();

    if( isTimerOver() ){
        clearInterval(ticking);
        alert("Timer is over AUDIO SOUND from HOWLER");
    }
}
function renderTimer(){
    let hours = dateTimer.getHours();
    hours = hours<=9 ? "0"+hours : hours;
    let minutes = dateTimer.getMinutes();
    minutes = minutes<=9 ? "0"+minutes : minutes;
    let seconds = dateTimer.getSeconds();
    seconds = seconds<=9 ? "0"+seconds : seconds;
    const outString = hours+":"+minutes+":"+seconds;
    timerTimeInp.value = outString;
}
function isTimerOver(){
    console.log(dateTimer.getTime());
    return dateTimer.getTime()==0;
}



//  ТАЙМЕР
//  сделать инпут времени редактируемым
//  начинать таймер от введенного времени
//  после старта убрать редактируемость
//  каждую секунду выводить новое значение таймера
//  после завершения сыграть звуковой сигнал






//  СЕКУНДОМЕР
/*
import {diffTimes} from "./calc.js";
const timerTime = document.querySelector("#timer-time");

const timerPause = document.querySelector("#timer-pause");

let currentTime;
let startMs;*/
//  построится внутри хеадера список со ссылками
//  в каждой ссылке указать имя секции и айдишник
//  написать код старта/стопа таймера
//  сделать переключение содержимого кнопки Старт/Стоп
//  выводить 
