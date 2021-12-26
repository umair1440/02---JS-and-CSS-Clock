const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setData() {
    const now = new Date();
    const second = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = (second / 60) * 360 + 90;
    const minutesDegree = (minutes / 60) * 360 + 90;
    const hourDegree = (hours / 12) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minutesDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


    console.log(minutesDegree);
    console.log(secondsDegree);
    console.log(hourDegree);
}
setInterval(setData, 1000);