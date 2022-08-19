function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    console.log(pinString.length)
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const pinDisplay = document.getElementById('pin-display');
    pinDisplay.value = pin;  
})
