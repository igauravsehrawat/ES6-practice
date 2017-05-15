
function secondMovement() {
    const secHand = document.querySelector('#second-hand');
    let sec = new Date().getSeconds();
    let secHandDeg = (sec/60) * 360 + 90;
    console.log(sec);
    if (sec == 59) {
        secHand.style.transition = '';
        secHand.style.transform = `rotate(${secHandDeg}deg)`;
        setTimeout(function () {
            console.log(secHand);
            secHand.style.transition = `0.05s cubic-bezier(0, 2.21, 0, 1.56)`;
        }, 2000);

    } else {
        secHand.style.transform = `rotate(${secHandDeg}deg)`;
    }
}

function minuteMovement() {
    const minHand = document.querySelector('#min-hand');
    let min = new Date().getMinutes();
    let minHandDeg = (min/60) * 360 + 90;
    minHand.style.transform = `rotate(${minHandDeg}deg)`;
}

function hourMovement() {
    const hourHand = document.querySelector('#hour-hand');
    let hour = new Date().getHours();
    let hourHandDeg = (hour/12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourHandDeg}deg)`;
}

secondMovement();
minuteMovement();
hourMovement();

setInterval(secondMovement, 1000);
setInterval(minuteMovement, 60000);
setInterval(hourMovement, 3600000);
