function extractNumber(value) {
    var displayValue = document.getElementById("display-value");
    if (displayValue.innerHTML == 0) {
        displayValue.innerHTML = ""
        displayValue.innerHTML += value
    } else {
        displayValue.innerHTML += value
    }
}

function calculate() {
    var displayValue = document.getElementById("display-value");
    var result = eval(displayValue.innerHTML);

    displayValue.innerHTML = result
}

function clearAll() {
    var displayValue = document.getElementById("display-value");

    displayValue.innerHTML = 0
}

function del() {
    var displayValue = document.getElementById("display-value");

    displayValueArray = displayValue.innerHTML.split("");

    displayValueArray.pop();

    displayValueArray = displayValueArray.join("");

    displayValue.innerHTML = displayValueArray;
}