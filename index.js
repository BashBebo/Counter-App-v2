let count = 0;

const IncreaseButton = document.getElementById("increasebtn");
const DecreaseButton = document.getElementById("decreasebtn");
const ResetButton = document.getElementById("resetbtn");
const CountElement = document.getElementById("count");

function updateDisplay() {
    CountElement.textContent = count;
}

function Increasebutton () {
    count++;
    document.getElementById("count").style.color = "green";
    if (count === 0) {
        document.getElementById("count").style.color = "black";
    }
    if (count < 0) {
        document.getElementById("count").style.color = "red";
    }
    updateDisplay();
}

function Decreasebutton () {
    count--;
    document.getElementById("count").style.color = "red";
    if (count === 0) {
        document.getElementById("count").style.color = "black";
    }
    if (count > 0) {
        document.getElementById("count").style.color = "green";
    }
    updateDisplay();
}

function Resetbutton () {
    count = 0;
    document.getElementById("count").style.color = "black";
    updateDisplay();
}

IncreaseButton.addEventListener("click", Increasebutton);
DecreaseButton.addEventListener("click", Decreasebutton);
ResetButton.addEventListener("click", Resetbutton);


updateDisplay();