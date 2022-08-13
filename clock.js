let secondHand = document.querySelector("#second");
let minuteHand = document.querySelector("#minute");
let hourHand = document.querySelector("#hour");

// Plan 1:
// [...] Inital brainstorm. Not useful.

// Plan 2: (too complex; didn't work)
// const rotate = () =>
// {
//     // Seconds rotation
//     atSecond += (1 / 60 * 360);
//     secondHand.style.transform = "rotate(" + atSecond + "deg)";

//     let newMinute = atMinute;
//     newMinute += (1 / 60 * 360) / 60;
//     if (newMinute - atMinute === 6)
//     {
//         atMinute+= (1 / 60 * 360);
//         minuteHand.style.transform = "rotate(" + atMinute + "deg)";
//     }
// }
// let atSecond = 0;    // Intially point at 12
// let atMinute = 0;
// let atHour = 0;
// setInterval(rotate, 1000);

// Plan 3: non-bonus
/* // Using multiplier on live server causes desync; possible solution: use one function like Plan 2
let multiplier = 50;    // (#)x speed; e.g. 2x
let speed = 1000 * (1 / (multiplier));    // Only works if 1/multiplier does not have trailing digits

// All intially point at 12
let atSecond = 0;
let atMinute = 0;
let atHour = 0;

const secondsRotate = () =>
{
    atSecond += (1 / 60 * 360);
    secondHand.style.transform = "rotate(" + atSecond + "deg)";
}
const minutesRotate = () =>
{
    atMinute += (1 / 60 * 360);
    minuteHand.style.transform = "rotate(" + atMinute + "deg)";
}
const hoursRotate = () =>
{
    atHour += (1 / 12 * 360);
    hourHand.style.transform = "rotate(" + atHour + "deg)";
}
setInterval(secondsRotate, speed);
setInterval(minutesRotate, speed * 60);
setInterval(hoursRotate, speed * 3600); */


//Plan 3: bonus
// Using multiplier on live server causes desync; possible solution: use one function like Plan 2
let multiplier = 500;    // (#)x speed; e.g. 2x
let speed = 1000 * (1 / (multiplier));    // Only works if 1/multiplier does not have trailing digits

// Use current time
const now = new Date();
let atSecond = now.getSeconds() / 60 * 360;
let atMinute = now.getMinutes() / 60 * 360;
let atHour = now.getHours() / 12 * 360;
secondHand.style.transform = "rotate(" + atSecond + "deg)";
minuteHand.style.transform = "rotate(" + atMinute + "deg)";
hourHand.style.transform = "rotate(" + atHour + "deg)";

const clockUpdate = () =>
{
    atSecond += 6;    // (1 / 60 * 360) = 6
    secondHand.style.transform = "rotate(" + atSecond + "deg)";
    if ((atSecond / 6) % 60 === 0)
    {
        atMinute += 6;    // (1 / 60 * 360) = 6
        minuteHand.style.transform = "rotate(" + atMinute + "deg)";
        if((atMinute / 6) % 60 === 0)
        {
            atHour += 30;    // (1 / 12 * 360) = 30
            hourHand.style.transform = "rotate(" + atHour + "deg)";
        }
    }
}
setInterval(clockUpdate, speed);