const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.getElementById("tip-amount");
const totalPerPerson = document.getElementById("total-amount");
const tips = document.querySelectorAll(".tips");

billInput.addEventListener("input", billInputFunction);
peopleInput.addEventListener("input", peopleInputFunction);
tips.forEach(function(val) {
    val.addEventListener("click", handleClick);
})

billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$ + (0.00).toFixed(2)";
totalPerPerson.innerHTML = "$ + (0.00).toFixed(2)";

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;

function billInputFunction() {
    billValue = parseFloat(billInput.value);
    console.log(billValue);
}

function peopleInputFunction() {
    peopleValue = parseInt(peopleInput.value);
    console.log(peopleValue);
}

function handleClick(event) {
    tips.forEach(function(val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML === val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    console.log(tipValue);
}

function calculateTip() {
    
}


