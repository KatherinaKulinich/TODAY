const wishes = [
    `Every day is a special gift from your Creator, another golden opportunity.<br> Have a great day!`,
    `Blessings of grace and peace be with you today and every day.<br> Wish you have a great day ahead!`,
    `Have the hope in God and start your day with positive thinking!<br> Wish you a great day!`,
    `May your day filled up with blessings.<br> Wish you have a great day ahead.`,
    `Every day is a new beginning to learn new things and grab new opportunities.<br> Have a superb day!`,
    `If the thoughts, prayers and intentions all are positive then life itself turns positive.<br> Wish you a very excellent day!`,
    `Just have a habit of smiling, all your sorrow will turn into happiness.<br> Have a nice day!`,
    `Make positive thoughts and enjoy every moment of this day!<br> Have a nice day!`,
    `Life is mysterious and unexpected, face it with courage.<br> Have a nice day!`,
    `Live your life in your own way, otherwise people will impose their ways on you.<br> Wish you have a good day!`,
    `Work hard and follow your dream, today grab new opportunities, waiting for you.<br> All the very best to you for a great day.`,
    `Nice attitude can help us make our day a perfect day.<br> Have a wonderful day!`,
    `Wishing you a day full of sunny smiles and happy thoughts!<br>  Have a fantastic day!`,
    `Success is not achieved in a day, for that we have to work hard every day. May this day be your step towards your success.<br> Enjoy the most of this day!`,
    `We are wasting today by worrying about the past and tomorrow. So live today only.<br> Have a nice day!`,
    `We should learn from our failures and improve ourselves every day and move towards success.<br> Have a Good Day!`,
    `“Every day is a good day to be alive, whether the sun’s shining or not.” <br> Marty Robbins`,
    `“Write it on your heart that every day is the best day<br> in the year.” <br> Ralph Waldo Emerson`,
    `“Take each good day and relish each moment. Take each bad day and work to make it good.” <br> Lisa Dado`,
    `“Any day above ground is a good day. Before you complain about anything, be thankful for your life and the things that are still going well.” <br> Germany Kent`,
    `Smile in the mirror. Do that every morning and you’ll start to see a big difference in your life.” <br> Yoko Ono`,
    `“If you’re changing the world, you’re working on important things. You’re excited to start your day” <br> Larry Page`,
    `“A lot of good days… makes a great life! Each day is important. Plan and execute it meticulously.” <br> Manoj Arora`,
    `“As long as you are winning it is a good day.” <br> Per Mertesacker`,
    `“If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.” <br> Elon Musk`,
    `Be consistent in your work. start with small steps to achieve your goals, even if you fall, wake up and start afresh.<br> Have a good day at work!`,
    `You can easily achieve complex goals by staying focus.<br> Have a good day at work!`,
    `You are always in my mind, and today is no different.<br> May you have a good day at work!`,
    `The things we like most are the ones that give us the satisfaction we need, may your effort be fruitful in every way.<br> Wish you a nice day!`,
    `Success is for those who take a step towards their goals, may you be bold enough to take that step of a lifetime.<br> Wish you a lovely day at work!`,
    `May today be a special day and you may get such success which the whole world will appreciate.<br> Wish you a good day!`,
    `Today will be a wonderful day for you and your ways will be filled with favor.<br> Have a good day!`,
    `You have always desired great achievement of your dreams.<br> This day, you are a step closer to it.`,
    `Welcome every morning with a smile and hope.<br> Have a good day!`,
    `Don’t settle for less today. You have greatness within you.<br> Have a good day!`,
    `Never regret in your life. Good things make you happy and the bad things give you experiences.<br> Have a good day!`
];

const hexSymbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const week = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];
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

let time = new Date;
let currentDate = ('0' + time.getDate()).slice(-2) + ' ' + year[time.getMonth()] + ' ' + time.getFullYear();

date.innerHTML = currentDate;
weekDay.innerHTML =  week[time.getDay()];



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







