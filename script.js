const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Rome", "Madrid", "Berlin"],
        answer: "Paris"
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Jane Austen", "Mark Twain", "Charles Dickens"],
        answer: "William Shakespeare"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');
const resultElement = document.getElementById('result');

function showQuestion() {
    const q = quizData[currentQuestion];
    questionElement.innerText = q.question;

    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectAnswer(option));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedOption) {
    const q = quizData[currentQuestion];
    if (selectedOption === q.answer) {
        score++;
    }

    nextQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionElement.style.display = 'none';
    optionsElement.style.display = 'none';
    nextButton.style.display = 'none';

    resultElement.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score} out of ${quizData.length}</p>`;
}

nextButton.addEventListener('click', nextQuestion);

showQuestion();
