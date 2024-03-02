const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<script>", status: true },
            { text: "<scripting>", status: false },
            { text: "<javascript>", status: false },
            { text: "<js>", status: false }
        ]
    },
    {
        question: "How do you write \"Hello\xa0World\" in an alert box?",
        answers: [
            { text: "alertBox(\"Hello\xa0World\");", status: false },
            { text: "msg(\"Hello\xa0World\");", status: false },
            { text: "msgBox(\"Hello\xa0World\");", status: false },
            { text: "alert(\"Hello\xa0World\");", status: true }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "function = myFunction()", status: false },
            { text: "function myFunction()", status: true },
            { text: "function:myFunction()", status: false },
            { text: "function()", status: false }
        ]
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: [
            { text: "if i = 5 then", status: false },
            { text: "if (i == 5)", status: true },
            { text: "if i = 5", status: false },
            { text: "if i == 5 then", status: false }
        ]
    },
    {
        question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        answers: [
            { text: "if i <> 5", status: false },
            { text: "if i =! 5 then", status: false },
            { text: "if (i <> 5)", status: false },
            { text: "if (i != 5)", status: true }
        ]
    },
    {
        question: "How does a FOR loop start?",
        answers: [
            { text: "for (i = 0; i <= 5)", status: false },
            { text: "for (i <= 5; i++)", status: false },
            { text: "for (i = 0; i <= 5; i++)", status: true },
            { text: "for i = 1 to 5", status: false }
        ]
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: [
            { text: "function = myFunction()", status: false },
            { text: "function myFunction()", status: true },
            { text: "function:myFunction()", status: false },
            { text: "function()", status: false }
        ]
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: [
            { text: "const colors = \"red\", \"green\", \"blue\"", status: false },
            { text: "const colors = (1:\"red\", 2:\"green\", 3:\"blue\")", status: false },
            { text: "const colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")", status: false },
            { text: "const colors = [\"red\", \"green\", \"blue\"]", status: true }
        ]
    },
    {
        question: "How do you round the number 28.7, to the nearest integer?",
        answers: [
            { text: "Math.rnd(28.7)", status: false },
            { text: "Math.round(28.7)", status: true },
            { text: "rnd(28.7)", status: false },
            { text: "round(28.7)", status: false }
        ]
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        answers: [
            { text: "onClick", status: false },
            { text: "click", status: false },
            { text: "onclick", status: true },
            { text: "onMouseClick", status: false }
        ]
    }
];

export default questions;