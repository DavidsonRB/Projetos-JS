let digitalElement = document.querySelector('[digital]');
let sElement = document.querySelector('[seconds]');
let mElement = document.querySelector('[minutes]');
let hElement = document.querySelector('[hours]');

function updateClock() {
    let now = new Date();

    let second = now.getSeconds();
    let minute = now.getMinutes();
    let hour = now.getHours();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;

    let sDeg = ((360 / 60) * second) - 90;
    let mDeg = ((360 / 60) * minute) - 90;
    let hDeg = ((360 / 12) * hour) - 90;

    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;

}

function fixZero(time) {
    return time < 10 ? `0${time}` : time;
}

updateClock();
setInterval(updateClock, 1000);