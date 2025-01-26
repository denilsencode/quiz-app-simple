const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome", "Berlin"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
    correctAnswer: "Harper Lee",
  },
  {
    question: "What is the smallest country in the world?",
    choices: ["Monaco", "Vatican City", "Nauru", "Malta"],
    correctAnswer: "Vatican City",
  },
  {
    question: "What is the longest river in the world?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const choicesContainer = document.getElementById("choices");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;

  choicesContainer.innerHTML = "";
  currentQuestion.choices.forEach((choice) => {
    const choiceButton = document.createElement("button");
    choiceButton.classList.add("list-group-item", "list-group-item-action");
    choiceButton.textContent = choice;
    choiceButton.onclick = () => checkAnswer(choice);
    choicesContainer.appendChild(choiceButton);
  });
}

function checkAnswer(selectedChoice) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedChoice === correctAnswer) {
    score++;
  }

  nextButton.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    nextButton.style.display = "none";
  } else {
    showResult();
  }
}

function showResult() {
  resultContainer.style.display = "block";
  scoreElement.textContent = score;
  document.getElementById("quiz-container").style.display = "none";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
  nextButton.style.display = "none";
  resultContainer.style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

loadQuestion();
