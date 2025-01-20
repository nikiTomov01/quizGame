window.onload = () => {
    setupCurrentQuestion();
    colorAnswerItems();
    for (let i = 1; i <= 4; i++) {
       document.getElementById(`answer-${i}`).addEventListener("click", () => {
        checkForAnswer(document.getElementById(`answer-${i}`));
    })
}
}

function colorAnswerItems() {
    let colors = ["#73EC8B", "#15B392", "#D2FF72", "#54C392"]
    let bgColors = [...colors].reverse();
    for (let i = 1; i <= 4; i++) {
        let tempItem = document.getElementById(`answer-${i}`);
        tempItem.style.backgroundColor = colors[i - 1];
        tempItem.style.borderColor = bgColors[i - 1];
        tempItem.addEventListener("mouseover", () => {
            tempItem.style.backgroundColor = bgColors[i - 1];
        });
        tempItem.addEventListener("mouseout",() => {
            tempItem.style.backgroundColor = colors[i - 1];
        });
    }
}

const quizQuestions = [
    ["What is the chemical symbol for water?", "H2", "H2O", "O2", "HO", "H2O"],
    ["Which country has the largest population in the world?", "India", "USA", "China", "Russia", "China"],
    ["Who was the first President of the United States?", "Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams", "George Washington"],
    ["Which sport uses the terms 'love', 'deuce', and 'ace'?", "Basketball", "Tennis", "Cricket", "Baseball", "Tennis"],
    ["Who directed the movie 'Titanic'?", "Steven Spielberg", "James Cameron", "Martin Scorsese", "Christopher Nolan", "James Cameron"],
    ["Who wrote the novel '1984'?", "Aldous Huxley", "George Orwell", "Ray Bradbury", "J.K. Rowling", "George Orwell"],
    ["What does CPU stand for in computing?", "Central Processing Unit", "Computer Performance Unit", "Central Power Unit", "Core Programming Unit", "Central Processing Unit"],
    ["What is the value of Pi (π) up to two decimal places?", "3.12", "3.14", "3.15", "3.16", "3.14"],
    ["Which language is the most spoken worldwide?", "English", "Mandarin Chinese", "Spanish", "Hindi", "Mandarin Chinese"],
    ["Which band is known for the song 'Bohemian Rhapsody'?", "The Beatles", "Queen", "Pink Floyd", "Led Zeppelin", "Queen"]
];

var questionAnswer = "";

function setupCurrentQuestion() {
    const questionNum = Math.floor((Math.random() * 10));
    const currQuestion = quizQuestions[questionNum];
    questionAnswer = currQuestion[currQuestion.length - 1];

    document.getElementById("question-text-item").innerHTML = currQuestion[0];

    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer-text-${i}`).innerHTML = currQuestion[i];
    }
}

function checkForAnswer(elem) {
    if (elem.firstElementChild.innerHTML === questionAnswer) {
        console.log("DING DING DING!");
    }
    else {
        console.log("WRONG ANSWERRRR!");
    }
}
  
  