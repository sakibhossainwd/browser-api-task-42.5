/*
Practice task for local storage (lebel-01)
1. Clear your local storage
2. Set a local storage item. key: name, value: Sakib Hossain
3. Set a local storage item. key; age, value: 20
4. Get the local storage item you have set.
5. Ramove the local storage key 'name' & key 'age'.
6. Set a object as local storege item. The object is {firstName: 'Sakib', lastName: 'Hossain'}
*/

// Let's Solve this task!

// 01
// localStorage.clear('write key name here');

// 02
// localStorage.setItem("name", "Sakib Hossain");

// 03
// localStorage.setItem("age","20")

// 04
// console.log(localStorage);

// 05
// localStorage.removeItem('name');
// localStorage.removeItem('age');


// 06
const addFullName = () => {
    const firstNameInput = document.getElementById('firstName');
    const lastNameNameInput = document.getElementById('lastName');
    const firstName = firstNameInput.value;
    const lastName = lastNameNameInput.value;
    // console.log(firstName, lastName)
    firstNameInput.value = '';
    lastNameNameInput.value ='';
    disPlayFullName(firstName, lastName)
    saveFullNameToLocalStorage(firstName, lastName)
}

const disPlayFullName = (firstName, lastName) => {
    const p = document.getElementById('fullName');
    p.innerText = `${firstName} ${lastName}`;
}

const getStoredFullName = () => {
    let fullName = {};
    const savedName =  localStorage.getItem('fullname');
    if(savedName){
        fullName = JSON.parse(savedName);
    }
    return fullName;
}

const saveFullNameToLocalStorage = (firstName, lastName) => {
    const fullName= getStoredFullName();
    fullName[firstName] = lastName
    const fullNameStringify = JSON.stringify(fullName);
    localStorage.setItem('fullname', fullNameStringify);
}

const disPlayFullNameFromLocalStorage = () => {
    const savedName = getStoredFullName();
    for(const firstName in savedName){
        const lastName = savedName[firstName];
        disPlayFullName(firstName, lastName);
    }
}

disPlayFullNameFromLocalStorage();



// 06-- another
// Create an object
const person = {
    firstName: 'Sakib',
    lastName: 'Hossain'
};

// Convert the object to a JSON string
const personJSON = JSON.stringify(person);

// Store the JSON string in local storage
localStorage.setItem('person', personJSON);

// Retrieve the JSON string from local storage
const storedPersonJSON = localStorage.getItem('person');

// Parse the JSON string to get the object
const storedPerson = JSON.parse(storedPersonJSON);

console.log(storedPerson);

// disPlayFullName(personJSON);

