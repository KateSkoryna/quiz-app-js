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

export default questions;