import setStatusClass from "./modules/setStatusClass.js"
import clearStatusClass from "./modules/clearStatusClass.js";
import shuffleQuestions from "./modules/shuffleQuestions.js";
import { startBtn, nextBtn, answerBtnEl, questionEl, questionContainerEl } from "./refs.js";

let curectQuestionIndex;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    curectQuestionIndex++;
    setNextQuestion();
})

function startQuiz() {
    startBtn.classList.add("hide");
    questionContainerEl.classList.remove("hide");
    curectQuestionIndex = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffleQuestions[curectQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.status) {
            button.dataset.status = answer.status;
        }
        button.addEventListener("click", selectAnswer)
        answerBtnEl.appendChild(button);
    })
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const status = selectedBtn.dataset.status;
    setStatusClass(document.body, status);
    Array.from(answerBtnEl.children).forEach(button => {
        setStatusClass(button, button.dataset.status);
    })

    if (shuffleQuestions.length > curectQuestionIndex + 1) {
            nextBtn.classList.remove("hide");
    } else {
        startBtn.innerText = "Restart";
        startBtn.classList.remove("hide");
    }
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}