let allCompleted = document.getElementById('allComplited');
let allSkiped = document.getElementById('allSkiped');
let clearer = document.getElementById('clear');

allCompleted.addEventListener('click', () => {
    fetch('/showAllComplete', {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        requestAnswer(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

allSkiped.addEventListener('click', () => {
    fetch('/showAllSkiped', {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        requestAnswer(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function requestAnswer(answerArray) {
    let answers = document.getElementById('answerDiv');
    if(answers === null) {
        let answerDiv = document.createElement('div');
        answerDiv.id = "answerDiv";
        answerDiv.className = "answer";
        let listOfAnswers = document.createElement('ul');
        listOfAnswers.id = "listOfAnswers";
        let closeButton = document.createElement('button');
        closeButton.innerHTML = "X";
        closeButton.addEventListener('click', removeAnswers);
        answerDiv.appendChild(closeButton);

        answerArray.forEach(indexValue => {
            let newListElement = document.createElement('li');
            newListElement.innerHTML = indexValue;
            newListElement.value = indexValue;
            listOfAnswers.appendChild(newListElement);
        });

        answerDiv.appendChild(listOfAnswers);
        const body = document.body;
        body.appendChild(answerDiv);
    }
    else {
        removeAnswers();
        requestAnswer();
    }
}

function removeAnswers() {
    let answerDiv = document.getElementById('answerDiv');
    const body = document.body;
    body.removeChild(answerDiv);
}