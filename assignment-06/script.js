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

function del() {
    var displayValue = document.getElementById("display-value");

    displayValueArray = displayValue.innerHTML.split("");

    displayValueArray.pop();

    displayValueArray = displayValueArray.join("");

    displayValue.innerHTML = displayValueArray;
}