function ageCalculate() {
    var ageYear = parseInt(document.getElementById("ageYear").value);
    var result = document.getElementById("result");

    if (ageYear) {
        var months = parseInt((ageYear * 12).toFixed(0))
        var days = parseInt((ageYear * 365).toFixed(0))
        result.innerHTML = "You are " + ageYear + " years old <br/> That is equal to: <br /> " + months + " months <br /> " + days + " days";
    } else {
        result.innerHTML = "Invalid age"
    }
    
}
