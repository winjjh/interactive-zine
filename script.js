// define our first variable
// when someone clicks on the letter1, we want the color to turn into something else.


// define our first variable, the letter1
let redLetter = document.querySelector(".letter1");

//what happens when someone interacts with the letter1
function turnRed() {
document.body.style.background = "red";
document.body.style.color = "black";
}

// add an event listener
// when someone clicks on the letter 1, change the color 

redLetter.addEventListener("click", turnRed);





// define our second variable, the letter2
let blueLetter = document.querySelector(".letter2");

//what happens when someone interacts with the letter2
function turnBlue() {
document.body.style.background = "blue";
document.body.style.color = "black";
}

// add an event listener
// when someone clicks on the letter 1, change the color 

blueLetter.addEventListener("click", turnBlue);




// define our third variable, the letter3
let yellowLetter = document.querySelector(".letter3");

//what happens when someone interacts with the letter3
function turnYellow() {
document.body.style.background = "Yellow";
document.body.style.color = "black";
}

// add an event listener
// when someone clicks on the letter 1, change the color 

yellowLetter.addEventListener("click", turnYellow);





// define our fourth variable, the letter5
let redLetter2 = document.querySelector(".letter5");

//what happens when someone interacts with the letter5
function turnRed() {
document.body.style.background = "red";
document.body.style.color = "black";
}

// add an event listener
// when someone clicks on the letter 1, change the color 

redLetter2.addEventListener("click", turnRed);




// define our fifth variable, the letter6
let blueLetter2 = document.querySelector(".letter6");

//what happens when someone interacts with the letter6
function turnBlue() {
document.body.style.background = "blue";
document.body.style.color = "black";
}

// add an event listener
// when someone clicks on the letter 1, change the color 

blueLetter2.addEventListener("click", turnBlue);






// when users hover on the Korean Alphabet
// table appears

let table = document.querySelector(".unicode-properties1");
let hoverLetter = document.querySelector(".letter1");
hoverLetter.addEventListener("mouseover", function() {
 table.classList.add("active");
})
hoverLetter.addEventListener("mouseout", hideTable);
function hideTable() {
  table.classList.remove("active");
}
// when users hover on "Nieun.jpg"

let table2 = document.querySelector(".unicode-properties2");
let hoverLetter2 = document.querySelector(".letter2");
hoverLetter2.addEventListener("mouseover", function() {
 table2.classList.add("active");
})
hoverLetter2.addEventListener("mouseout", hideTable2);
function hideTable2() {
  table2.classList.remove("active");
}

var canvas, context;
function init() {
    canvas = document.getElementById("myCanvas");
    context = canvas.getContext("2d");
 
    context.lineWidth = 5; // 선 굵기를 2로 설정
    context.strokeStyle = "black";
 
    // 마우스 리스너 등록. e는 MouseEvent 객체
    canvas.addEventListener("mousemove", function (e) { move(e) }, false);
    canvas.addEventListener("mousedown", function (e) { down(e) }, false);
    canvas.addEventListener("mouseup", function (e) { up(e) }, false);
    canvas.addEventListener("mouseout", function (e) { out(e) }, false);
}

var startX=0, startY=0; // 드래깅동안, 처음 마우스가 눌러진 좌표
var drawing=false;
function draw(curX, curY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(curX, curY);
    context.stroke();
}
function down(e) {
    startX = e.offsetX; startY = e.offsetY;
    drawing = true;
}
function up(e) { drawing = false; }
function move(e) {
    if(!drawing) return; // 마우스가 눌러지지 않았으면 리턴
    var curX = e.offsetX, curY = e.offsetY;
    draw(curX, curY);
    startX = curX; startY = curY;
}
function out(e) { drawing = false; }