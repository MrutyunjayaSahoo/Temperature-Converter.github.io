const inputs = document.querySelectorAll(".panel input")
const c = document.querySelector("#celsius")
const f = document.querySelector("#fahrenheit")
const k = document.querySelector("#kelvin")
function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32
    }
function celsiusToKelvin(celsius) {
    return celsius + 273.15
    }
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8
    }
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5 / 9
    }
function kelvinToCelsius(kelvin) {
    return kelvin - 273.15
    }
function kelvinToFahrenheit(kelvin) {
    return kelvin * 9 / 5 - 459.67
    }
function round(num) {
    return Math.round(num * 100) / 100
    }
function convert() {
    const value = parseFloat(this.value)
    if (this.id === "celsius") {
        f.value = round(celsiusToFahrenheit(value))
        k.value = round(celsiusToKelvin(value))
        }
    if (this.id === "fahrenheit") {
        c.value = round(fahrenheitToCelsius(value))
        k.value = round(fahrenheitToKelvin(value))
        }
    if (this.id === "kelvin") {
        c.value = round(kelvinToCelsius(value))
        f.value = round(kelvinToFahrenheit(value))
        }
    }
inputs.forEach(input => input.addEventListener("input", convert))