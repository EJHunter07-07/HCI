/*
var ul = document.getElementById("myUL")
for (var i = 0;i<ul.childNodes.length;i++){
}
*/
let time
window.addEventListener("load", function() {
    const clock = document.getElementById("time");
    time = -1;
    let intervalId;
    function incrementTime() {
        time++;
        clock.textContent =
            ("0" + Math.trunc(time / 60)).slice(-2) +
            ":" + ("0" + (time % 60)).slice(-2);
    }
    incrementTime();
    intervalId = setInterval(incrementTime, 1000);
});


const arr = [];

const buttons = document.getElementsByTagName("li");

const buttonPressed = e => {
    //console.log(e.target.innerHTML);  // Get ID of Clicked Element
    arr.push(e.target.innerHTML);
}

for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
}

document.getElementById("but").onclick = function () {
    console.clear();
    for (const eKey of arr) {
        console.log(eKey);
    }
};






