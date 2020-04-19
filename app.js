// All variables
const colorCode = document.getElementById('color-code');
const clockData = document.getElementById('clock-time');
const body = document.querySelector('body');

// GetTime
function getTime() {
    const t = new Date();
    const time = t.toLocaleTimeString();
    clockData.textContent = time;
    console.log(time);
}

// Get Color Code
let getColor = () => {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    let now = `${hour} : ${min} : ${sec}`
    console.log(now);
    let colorGen = `#${hour}${min}${sec}`;
    // Color code adding to dom
    colorCode.textContent = `Background Color: ${colorGen}`;
    // Setting background color
    body.style.backgroundColor = colorGen;
    console.log(colorGen);
}

// Calls every 1 sec
setInterval(getTime, 1000 );
setInterval(getColor, 1000);

