const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainerEl = document.getElementById("question-container");
const questionEl = document.getElementById("question");
const answerBtnEl = document.getElementById("answer-buttons");

let curectQuestionIndex;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
    curectQuestionIndex++;
    setNextQuestion();

})

const questions = [
    {
        question: "What is 2 + 2?",
        answers: [
            { text: "4", status: true },
            { text: "22", status: false },
            { text: "3", status: false },
            { text: "14", status: false }
        ]
    },
    {
        question: "What is 4 * 3?",
        answers: [
            { text: "2", status: false },
            { text: "15", status: false },
            { text: "122", status: false },
            { text: "12", status: true }
        ]
    },
    {
        question: "What is 5 * 5?",
        answers: [
            { text: "2", status: false },
            { text: "25", status: true },
            { text: "13", status: false },
            { text: "44", status: false }
        ]
    }
];


const shuffleQuestions = questions.sort(() => Math.random() - .5);

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

function setStatusClass(el, status) {
    clearStatusClass(el);
    if (status) {
        el.classList.add("correct");
    } else {
        el.classList.add("wrong")
    }
}

function clearStatusClass(el) {
    el.classList.remove("correct");
    el.classList.remove("wrong");
}

function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add("hide");
    while (answerBtnEl.firstChild) {
        answerBtnEl.removeChild(answerBtnEl.firstChild);
    }
}