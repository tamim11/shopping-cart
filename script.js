const phoneMinusButton = document.getElementById("phone-minus");
const phonePlusButton = document.getElementById("phone-plus");
const caseMinusButton = document.getElementById("case-minus");
const casePlusButton = document.getElementById("case-plus");
const phoneClearButton = document.getElementById("phone-clear");
const caseClearButton = document.getElementById("case-clear");
const phoneTotalDisplay = document.getElementById("phone-total");
const caseTotalDisplay = document.getElementById("case-total");
const subtotalSpan = document.getElementById("subtotal");
const taxSpan = document.getElementById("tax");
const totalSpan = document.getElementById("total");
const phoneAmount = document.getElementById("phone-amount");
const caseAmount = document.getElementById("case-amount");


//--------------------------------------------------- iphone add and minus event handler
phoneMinusButton.addEventListener('click', () => {
    let currentAmount = parseInt(phoneAmount.value);
    if (currentAmount == 0) {
        return;
    }
    updateInputText(phoneAmount, -1);
    updateSpanText(phoneTotalDisplay, -1219);
    updateSpanText(subtotalSpan, -1219);
    updateSpanText(totalSpan, -1219);
});
phonePlusButton.addEventListener('click', () => {
    updateInputText(phoneAmount, 1);
    updateSpanText(phoneTotalDisplay, 1219);
    updateSpanText(subtotalSpan, 1219);
    updateSpanText(totalSpan, 1219);
});

//---------------------------------------------------- case add and minus event handler
caseMinusButton.addEventListener('click', () => {
    let currentAmount = parseInt(caseAmount.value);
    if (currentAmount == 0) {
        return;
    }
    updateInputText(caseAmount, -1);
    updateSpanText(caseTotalDisplay, -59);
    updateSpanText(subtotalSpan, -59);
    updateSpanText(totalSpan, -59);
});
casePlusButton.addEventListener('click', () => {
    updateInputText(caseAmount, 1);
    updateSpanText(caseTotalDisplay, 59);
    updateSpanText(subtotalSpan, 59);
    updateSpanText(totalSpan, 59);
});

//-------------------------------------------------- phone and case clear event handler
phoneClearButton.addEventListener('click', () => {
    updateSpanText(subtotalSpan, -1 * (parseInt(phoneTotalDisplay.innerText)));
    updateSpanText(totalSpan, -1 * (parseInt(phoneTotalDisplay.innerText)));
    phoneAmount.value = "0";
    phoneTotalDisplay.innerText = "0";
});
caseClearButton.addEventListener('click', () => {
    updateSpanText(subtotalSpan, -1 * (parseInt(caseTotalDisplay.innerText)));
    updateSpanText(totalSpan, -1 * (parseInt(caseTotalDisplay.innerText)));
    caseAmount.value = "0";
    caseTotalDisplay.innerText = "0";
});

function updateSpanText(targetSpan, updateWith) {
    let previousValue = parseInt(targetSpan.innerText);
    targetSpan.innerText = previousValue + updateWith;
}

function updateInputText(targetInput, updateWith) {
    let previousValue = parseInt(targetInput.value);
    targetInput.value = previousValue + updateWith;
}