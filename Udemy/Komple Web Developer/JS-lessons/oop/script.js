function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
}

Question.prototype.checkAnswer = function (answer) {
    return answer == this.correctAnswer
}

let questions = [
    new Question("İtalyancadan Türkçeye geçen \"tavla\" kelimesinin kökeninin anlamı nedir?", {
        a: "Şans",
        b: "Pul",
        c: "Tahta",
        d: "Zar"
    }, "c"),
    new Question("ABD başkanlarının besledikleri resmi hayvanları arasında hangisi yoktur?", {
        a: "Muhabbet Kuşu",
        b: "Zürafa",
        c: "Sırtlan",
        d: "Su aygırı"
    }, "b"),
    new Question("\"Ağrıdağının yamacında, 4200 metrede bir göl vardır...\" cümlesiyle başlayan \"Ağrıdağı Efsanesi\" kitabının yazarı kimdir?", {
        a: "Kemal Tahir",
        b: "Yaşar Kemal",
        c: "Orhan Kemal",
        d: "Fakir Baykurt"
    }, "b")
]

function Quiz(questions) {
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestion = function () {
    return this.questions[this.questionIndex];
}

const quiz = new Quiz(questions);
let questionText = document.querySelector(".question-text");
let optionList = document.querySelector(".option-list");
let footer = document.querySelector(".footer");
let timeLimit;
let count;
let correctAnswerCount = 0;
let wrongAnswerCount = 0;

document.querySelector(".btn-start").addEventListener("click", function () {
    document.querySelector(".btn-start").classList.add("inactive");
    document.querySelector(".quiz-box").classList.remove("inactive");
    getQuestions();
})

document.querySelector(".option-list").addEventListener("click", function (e) {
    if (e.target.tagName == "LI") {
        checkAnswer(e.target)
    }
})

function getQuestions() {
    count = 30;
    //Getting Question
    questionText.innerHTML = `
        <span>${quiz.questionIndex + 1} - ${quiz.getQuestion().questionText}</span>
        `
    //Getting options
    let quizOptions = quiz.getQuestion().options;
    if (optionList.classList.contains("pointer-inactive")) {
        optionList.classList.remove("pointer-inactive")
    }
    optionList.innerHTML = `
        <li id="a" class="option option-item">${quizOptions.a}</li>
        <li id="b" class="option option-item">${quizOptions.b}</li>
        <li id="c" class="option option-item">${quizOptions.c}</li>
        <li id="d" class="option option-item">${quizOptions.d}</li>`;
    footer.innerHTML = `
    <div class="countdown">
    <h3>
    ${count}
    </h3>
    </div>
    `
    timeLimit = setInterval(countdown, 1000);
}

function checkAnswer(tag) {
    let quizAnswer = quiz.getQuestion().correctAnswer;
    tag.classList.remove("option-item");
    if (tag.id == quizAnswer) {
        tag.classList.add("correct-answer");
        correctAnswerCount++;
    } else {
        tag.classList.add("wrong-answer");
        let trueAnswer = document.getElementById(quiz.getQuestion().correctAnswer);
        trueAnswer.classList.remove("option-item");
        trueAnswer.classList.add("correct-answer");
        wrongAnswerCount++;
    }
    optionList.classList.add("pointer-inactive")
    quiz.questionIndex++;
    clearInterval(timeLimit)
    let nextQuestion = setTimeout(nextButton, 1000)
}

function countdown() {
    if (count == 0) {
        wrongAnswerCount++;
        quiz.questionIndex++;
        clearInterval(timeLimit)
        nextButton();

    } else {
        count--;
        let countdownDOM = document.querySelector("h3");
        countdownDOM.innerHTML = count;
    }

}

function nextButton() {
    if (quiz.questionIndex !== quiz.questions.length) {
        footer.insertAdjacentHTML("beforeend", `
            <div class="btn-next">
            <button class="btn btn-primary btn-lg next" onclick="getQuestions()">Next</button>
            </div>
    `)
    } else {
        footer.insertAdjacentHTML("beforeend", `
        <div class="btn-finish">
        <button class="btn btn-dark btn-lg finish" onclick="finishButton()">Finish</button>
        </div>
        `)
    }

}

function finishButton() {
    document.querySelector(".quiz-box").innerHTML = `
    <div class="results">
    <h2>Results</h2>
    <h4 class="correct">Correct Answers : ${correctAnswerCount}</h4>
    <h4 class="wrong">Wrong Answers : ${correctAnswerCount}</h4>
    </div>
    <div class="d-flex justify-content-center btn-restart">
    <button class="btn btn-secondary btn-lg">Restart</button>
    </div>
    `
    correctAnswerCount = 0;
    wrongAnswerCount = 0;
    quiz.questionIndex = 0;
}


