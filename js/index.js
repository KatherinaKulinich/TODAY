const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const week = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const year = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const container = document.querySelector('#container');
const date = document.querySelector('#date');
const wish = document.querySelector('#wish');
const weekDay = document.querySelector('#weekDay');
const clock = document.querySelector('#time')




//random wish

const randomWish =  Math.round( Math.random() *( wishes.length - 1));
wish.innerHTML = wishes[randomWish];




//current time

function getCurrentTime() {
    let timeNow = new Date;

    let hour = timeNow.getHours();
    let min = timeNow.getMinutes();
    let sec = timeNow.getSeconds();

    let currentTime = ('0' + hour).slice(-2) + ':' + ('0' + min).slice(-2) + ':' + ('0' + sec).slice(-2);
    clock.innerHTML = currentTime;
}
document.onload = getCurrentTime();
setInterval(getCurrentTime, 1000);



//date

function getCurrentDate() {
    let time = new Date;
    let currentDate = ('0' + time.getDate()).slice(-2) + ' ' + year[time.getMonth()] + ' ' + time.getFullYear();

    date.innerHTML = currentDate;
    weekDay.innerHTML =  week[time.getDay()];
}
document.onload = getCurrentDate();


//random background

function generateColor() {
    let symbols = '';
    let color = '';
    
    for ( let i = 0; i < 6; i++) {
        let randomNumber = Math.round( Math.random() * (hexSymbols.length - 1));
        let randomSymbol = hexSymbols[randomNumber];
        symbols += randomSymbol;
    } 

    color = `#${symbols}`;
    return color;
}

const firstColor = generateColor();
const secondColor = generateColor();
const angle = Math.round( Math.random() * 360);

const gradient = `linear-gradient(${angle}deg, ${firstColor}, ${secondColor})`;
container.style.background = gradient;







