/*
Practice task for local storage (level-2).
step-1: Html file will have a p tag and button
step-2: The p tag will show "the count" which is initially 0. (initially the value in local storage 0).
step-3: Every time, after clicking the button, the number will be increased by 1. & the result will be shown in the p tag.
step-4: With every click on the button, the  result will be stored in the local storage also.
stap-5: Now the result is stored in local storage. So, if you reload the page or close the tab & open again, the result of "the count" is not 0. Rather it will show the value from local storage without reset.
*/


const p = document.getElementById('number');
const increaseBtn = document.getElementById('increaseBtn');

let clickCount = 0;

increaseBtn.addEventListener("click", () => {
    clickCount++;
    p.innerText = clickCount;
    saveIncreaseNumber(clickCount);
})

const getStoredNumber = () => {
    let number = {};
    const increaseNumber = localStorage.getItem('number');
    if(increaseNumber){
        number = JSON.parse(increaseNumber);
    }
    return number;
}

const saveIncreaseNumber = (number) => {
    localStorage.setItem('number', number);
}

const displayIncreaseNumberFromLocalStorage = () => {
    const increaseNumber = getStoredNumber();
    p.innerText = increaseNumber;
}

displayIncreaseNumberFromLocalStorage();
