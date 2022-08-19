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

//event bubble and delegate base
// sob button a id ba class set na kore oder parent k nia kaj ta kora hoise. tai eta delegate base
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed-number')
    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {
            const digits = typedNumberField.value.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits
        }
    } else {
        typedNumberField.value += number;
    }
})