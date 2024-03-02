import questions from "../data/questions.js"

const shuffleQuestions = questions.sort(() => Math.random() - .5);

export default shuffleQuestions;