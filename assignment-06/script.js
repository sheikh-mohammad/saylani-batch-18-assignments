function extractNumber(value) {
    var displayValue = document.getElementById("display-value");
    displayValue.innerHTML += value
}

function calculate() {
    var displayValue = document.getElementById("display-value");
    var result = eval(displayValue.innerHTML);

    displayValue.innerHTML = result
}

function clearAll() {
    var displayValue = document.getElementById("display-value");

    displayValue.innerHTML = ""
}