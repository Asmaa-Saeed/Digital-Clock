const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const amPmEl = document.querySelector(".ampm");

updateClock();
function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amPm;

    if (h > 12) {
        h = h - 12;
        amPm = "PM";
    } else if (h === 12) {
        amPm = "PM";
    } else if (h === 0) {
        h = 12;
        amPm = "AM";
    }

    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;

    hourEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    amPmEl.innerText = amPm;

    setTimeout(() => {
        updateClock()
    }, 1000);
}

