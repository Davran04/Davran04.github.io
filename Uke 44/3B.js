
let celsiusInputEl = document.getElementById("celsius");
let fahrenheitInputEl = document.getElementById("fahrenheit");

let celsiusButtonEl = document.getElementById("celsius-button");
celsiusButtonEl.addEventListener("click", Celsius2Fahrenheit);

let fahrenheitButtonEl = document.getElementById("fahrenheit-button");
fahrenheitButtonEl.addEventListener("click", Fahrenheit2Celsius);

function Fahrenheit2Celsius(){
    let f = fahrenheitInputEl.value;
    celsiusInputEl.value = 5/9 * (f - 32);
}

function Celsius2Fahrenheit(){
    let c = celsiusInputEl.value;
    fahrenheitInputEl.value = 9/5 * c + 32;
}