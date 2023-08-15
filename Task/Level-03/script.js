/*
practice task for local storage (level-03).
step-1: Create a form where will have name,email,massege input and every input beside will have two button 1. Delete name 2. send name and after all in the bottom wil have Reset button.
step-2: Take this inputs
step-3: If you click on the 'Send Name' button, the input will be set on the local storage. Do the same for other "Send button".
step-4:  If you click on the "Delete Name" button, the name key & value will be cleared from the local storage. Do the same for other "Delete buttons".
step-5: If you click on the "Reset" button, the key & value will be cleared from local sotarage.
*/


// Name part
const sendName = () => {
    const name = document.getElementById('name').value;
    localStorage.getItem('name');
    localStorage.setItem('name', name)
}
const deleteName = () => {
    localStorage.removeItem('name');
}

// Email part
const sendEmail = () => {
    const email = document.getElementById('email').value;
    localStorage.getItem('email');
    localStorage.setItem('email', email)
}
const deleteEmail = () => {
    localStorage.removeItem('email');
}

// message part
const sendMessage = () => {
    const message = document.getElementById('message').value;
    localStorage.getItem('message');
    localStorage.setItem('message', message)
}
const deleteMessage = () => {
    localStorage.removeItem('message');
}

// Reset part
const reset = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    localStorage.removeItem('message');
}


// Level-04 task
// send button
const send = () => {
    const name1 = document.getElementById('name').value;
    const email1 = document.getElementById('email').value;
    const message1 = document.getElementById('message').value;
    // console.log(name1, email1, message1)
    savedDataToLocalStorage(name1, email1, message1)
}

const getStorageData = () => {
    let data = {};
    const savedData = localStorage.getItem('data');
    if(savedData){
        data = JSON.parse(savedData);
    }
    return data;
}

const savedDataToLocalStorage = (name1, email1, message1) => {
    const data = getStorageData();
    data[name1] = email1, message1;
    const dataStringify = JSON.stringify(data);
    localStorage.setItem('data', dataStringify);
}


