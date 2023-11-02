const COMPLETE_TASK_IAMEGE = "images/Bookmark.png";
const SKIPED_TASK_IMAGE = "images/X.png";
let listOfTask = document.getElementById("tasks");

document.addEventListener("DOMContentLoaded" ,() => {
    fetch("/getAllTasks", {
        method : "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        data.forEach(indexValue => {
            createTask(indexValue);
        })
    })
    .catch(error => {
        console.error("Error:", error)
    })
})

function createTask(taskContent) {
    let liElement = document.createElement('li');
    liElement.innerHTML = taskContent;
    liElement.value = taskContent;
    let completeButton = document.createElement('button');
    let skippedButton = document.createElement('button');
    completeButton.className = "taskButtons";
    skippedButton.className = "taskButtons";
    completeButton.id = "done";
    skippedButton.id = "skiped";

    let imageForComplete = document.createElement('img');
    let imageForSkippedButton = document.createElement('img');

    imageForComplete.src = COMPLETE_TASK_IAMEGE;
    imageForSkippedButton.src = SKIPED_TASK_IMAGE;
    
    completeButton.appendChild(imageForComplete);
    skippedButton.appendChild(imageForSkippedButton);
    liElement.appendChild(completeButton);
    liElement.appendChild(skippedButton);

    listOfTask.appendChild(liElement);
}

function completeTaskHandler() {
    //---------------------------------------
}

function skippedTaskHandler() {
    //----------------------------------------
}