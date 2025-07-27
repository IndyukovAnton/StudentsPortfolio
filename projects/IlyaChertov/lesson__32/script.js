function clearDisplay() {
    display.value = ''
}

function appendToDisplay(value) {
    display.value += value
}

function calculateResult() {
    const displayValue = display.value
    if(!displayValue) {
        display.value = 0
        return
    } 
    const result = eval(displayValue)
    display.value = result
    display.dataset.pre = `${displayValue}=${result}`
}

const display = document.getElementById('display')
