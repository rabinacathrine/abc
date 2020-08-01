let score = 0;
let colors = generateRandomColors(3);
let squares = document.querySelectorAll(".square");
let pickedColor = colors[3]; //choosing our answer color
let colorDisplay = document.getElementById("colorDisplay"); //choosing the span
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let startBtn = true;
let scoreDisplay = document.querySelector("#scoreDisplay")
//Pop-up Window(to start the game)
function PopUp() {
    document.getElementById('ac-wrapper').style.display = "none";
}
function newColors() {
    colors = generateRandomColors(3); //generate all new colors
    pickedColor = pickColor(); //pick a new random color from the array
    colorDisplay.textContent = pickedColor; //change colorDisplay to match picked Color
    for (let i = 0; i < squares.length; i++) { //change colors of squares    
        squares[i].style.backgroundColor = colors[i]
    }
    h1.style.background = "steelblue";
}
newColors();
//Setting the clicking event on the squares to generate a response(i.e, correct or incorrect/try again!)
colorDisplay.textContent = pickedColor;
for (let i = 0; i < squares.length; i++) { //...(1)[add initial colors to squares]
    squares[i].style.backgroundColor = colors[i] //add initial colors to square
    squares[i].addEventListener("click", function () { //setting the click event
        let clickedColor = this.style.backgroundColor; //grab color of clicked square
        if (clickedColor === pickedColor) { //compare color to pickedColor
            messageDisplay.textContent = "Correct!";
            startBtn.textContent = "Play Again?";
            changeColors(clickedColor);
            // this.style.visibility = 'visible'
            h1.style.background = clickedColor;
            if (messageDisplay.textContent = "Correct!") {
                score += 50;
                if (score > 100) {
                    messageDisplay.textContent = "Congratultions"
                    // var modal = document.getElementById("modal");
                    // clickedColor.onclick = function () {
                    //     modal.style.display = "block"
                    // }
                   //alert(window.open("CONGRATULATIONS"));
                        //alert("Congratulation");
                        //window.location.href = "ex.html";
                        //window.open(window.location.href="ex.html")
                }
            }
            scoreDisplay.textContent = score;
            newColors();
        } else {
            this.style.backgroundColor = "#FFFFFF";
            // this.style.visibility = 'hidden'
            messageDisplay.textContent = "Try Again!";
            score--;
            scoreDisplay.textContent = score;
        }
    });
}
function changeColors(color) {
    for (let i = 0; i < squares.length; i++) { //loop through all squares
        squares[i].style.background = color; //change each color to match given color
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
function generateRandomColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
        arr.push(randomColor()) //get random color and push into array
    }
    return arr;
}
function randomColor() {
    let r = Math.floor(Math.random() * 256); //pick a "red" from 0-255
    let g = Math.floor(Math.random() * 256); //pick a "green" from 0-255
    let b = Math.floor(Math.random() * 256); //pick a "blue" from 0-255
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
//Setting the timer function
document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector("#timer")
    const startBtn = document.querySelector("#timerBtn")
    let timeLeft = 60
    function countdown() {
        setInterval(function () {
            if (timeLeft <= 0) {
                clearInterval(timeLeft = 0)
                messageDisplay.textContent = "GAME OVER!"
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -= 1;
        }, 1000)
    }
    startBtn.addEventListener('click', countdown)
})
