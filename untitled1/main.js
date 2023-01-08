/*
var ul = document.getElementById("myUL")
for (var i = 0;i<ul.childNodes.length;i++){
}
*/


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






