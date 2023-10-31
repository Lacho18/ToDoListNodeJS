let tasksList = document.getElementById('tasks');
let addMenu = document.getElementById('addMenu');
let AddButton = document.getElementById('AddButton');
let addingForm = document.getElementById('addingForm');

let menuButton = document.getElementById('menuButton');
let menuDiv = document.getElementById('menuDiv');
let menuShown = false;
menuDiv.style.display = 'none';

let bodyObject = {
    task : "",
    importance : 0
};

addMenu.style.display = "none";

AddButton.addEventListener('click', () => {
    let allElements = addMenu.querySelectorAll("*");
    allElements.forEach(indexValue => {
        indexValue.style.display = 'none';
    });
    addMenu.style.display = "inline-block";
    addMenu.classList.add('addMenuApearence');
    setTimeout(() => {
        allElements.forEach(indexValue => {
            indexValue.style.display = 'inline-block';
        });
        addMenu.classList.remove('addMenuApearence');
    }, 2000);
});

menuButton.addEventListener('click', () => {
    let everyButton = menuDiv.querySelectorAll("*");
    everyButton.forEach(indexValue => {indexValue.style.display = "none";});
    if(!menuShown) {
        menuDiv.style.display = 'inline-block';
        menuDiv.classList.add('menuApearence');
        menuShown = true;
        setTimeout(() => {
            everyButton.forEach(indexValue => {indexValue.style.display = "inline-block";});
        }, 10);
    }
    else {
        menuDiv.style.display = 'none';
        menuDiv.classList.remove('menuApearence');
        menuShown = false;
    }
})

addingForm.addEventListener('submit', () => {
    let taskContect = document.getElementById('newTask');
    let importanceContect = document.getElementById('importance');

    bodyObject.task = taskContect.value;
    bodyObject.importance = parseInt(importanceContect.value);

    if(bodyObject != null && Object.keys(bodyObject).length !== 0) {
        fetch('/submit', {
            method: 'POST',
            body: bodyObject,
        })
        .then((response) => {response.text()})
        .then((data) => {console.log(data)});
    
    }
    
    bodyObject = {};
})